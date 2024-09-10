import { SetStateAction, useState } from "react";
import ListItem from "./ListItem";
import List from "./List";

type VirtualizedListProps = {
  items: any[];
  itemHeight: number;
  visibleItems: number;
};

export default function VirtualizedList({
  items,
  itemHeight,
  visibleItems,
}: VirtualizedListProps) {
  const [scrollTop, setScrollTop] = useState(0);
  const totalItems = items.length;
  const totalItemsHeight = itemHeight * totalItems;
  const visibleItemsHeight = itemHeight * visibleItems;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    totalItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + visibleItemsHeight) / itemHeight)
  );
  const filteredItems = [];

  for (let i = startIndex; i <= endIndex; i++) {
    filteredItems.push({
      id: items[i]?.id,
      content: items[i]?.content,
      style: {
        position: "absolute",
        top: `${i * itemHeight}px`,
        width: "100%",
        height: `${itemHeight}px`,
      },
    });
  }

  const onScroll = (event: {
    currentTarget: { scrollTop: SetStateAction<number> };
  }) => {
    return setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <div
      style={{
        overflowY: "scroll",
        position: "relative",
        height: `${visibleItemsHeight}px`,
      }}
      onScroll={onScroll}
    >
      <List
        style={{
          position: "absolute",
          width: "100%",
          height: `${totalItemsHeight}px`,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <ListItem items={filteredItems} />
      </List>
    </div>
  );
}
