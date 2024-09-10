import { ReactNode } from "react";

type ListProps = {
  style: object;
  children: ReactNode;
};

export default function List({ style, children }: ListProps) {
  return <ul style={style}>{children}</ul>;
}
