type ListItemProps = {
  items: any[];
};

export default function ListItem({ items }: ListItemProps) {
  return items.map(({ content, id, style }) => {
    return (
      <li key={id} style={style}>
        {content}
      </li>
    );
  });
}
