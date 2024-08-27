import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

const Container = styled("div")<Props>`
  color: darkgray;
  width: 20%;
  min-height: calc(90% -24px);
  border-right: solid 1px #111318;

  ul {
    margin: 0;
    padding: 0;

    li {
      font-size: 20px;
      list-style-type: none;
      border-bottom: solid 1px #111318;
      padding: 0;

      a {
        width: calc(100% - 24px);
        display: inline-block;
        font-size: 16px;
        color: #525967;
        &:hover {
          color: var(--accent-color);
        }
        &.active {
          color: var(--accent-color);
          background-color: #283541;
          pointer-events: none;
          cursor: default;
        }
      }
    }
  }
`;

export default function SidePanel({ children }: Props) {
  return (
    <Container>
      <nav>
        <ul>
          <li>{children}</li>
        </ul>
      </nav>
    </Container>
  );
}
