import styled from "styled-components";

type ListItemProps = {
  items: any[];
};

type ItemProps = {
  "data-height": number;
  "data-idx": number;
};

const Item = styled.li<ItemProps>`
  position: absolute;
  top: ${(props) => props["data-idx"] * props["data-height"] + "px"};
  width: 100%;
  height: ${(props) => props["data-height"] + "px"};
`;

export default function ListItem({ items }: ListItemProps) {
  return items.map(({ content, id, idx, height, classes, styles }) => {
    return (
      <Item
        data-idx={idx}
        data-height={height}
        key={id}
        className={classes}
        style={styles}
      >
        {content}
      </Item>
    );
  });
}
