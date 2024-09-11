import { SetStateAction, useState } from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

type VirtualizedListProps = {
  itemsData: object[];
  itemHeight?: number;
  visibleItems?: number;
};

type WrapperProps = {
  "data-visible-items-height": number;
};

const Wrapper = styled.div<WrapperProps>`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  height: ${(props) => props["data-visible-items-height"] + "px"};
`;

type ListProps = {
  "data-total-items-height": number;
};

const List = styled("ul")<ListProps>`
  position: absolute;
  width: 100%;
  height: ${(props) => props["data-total-items-height"] + "px"};
  list-style: "none";
  margin: 0;
  padding: 0;
`;

export default function VirtualizedList({
  itemsData = [],
  itemHeight = 50,
  visibleItems = 10,
}: VirtualizedListProps) {
  const [scrollTop, setScrollTop] = useState(0);
  const visibleItemsData = [];
  const totalItems = itemsData.length;
  const totalItemsHeight = itemHeight * totalItems;
  const visibleItemsHeight = itemHeight * visibleItems;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    totalItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + visibleItemsHeight) / itemHeight)
  );

  for (let idx = startIndex; idx <= endIndex; idx++) {
    visibleItemsData.push({
      ...itemsData[idx],
      idx,
      height: itemHeight,
    });
  }

  const onScroll = (event: {
    currentTarget: { scrollTop: SetStateAction<number> };
  }) => {
    return setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <Wrapper data-visible-items-height={visibleItemsHeight} onScroll={onScroll}>
      <List data-total-items-height={totalItemsHeight}>
        <ListItem items={visibleItemsData} />
      </List>
    </Wrapper>
  );
}
