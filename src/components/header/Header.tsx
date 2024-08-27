import { ReactNode } from "react";
import styled from "styled-components";

type ContainerProps = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

type TitleProps = string;

type Props = {
  title: TitleProps;
  subtitle: string;
};

const Container = styled("div")<ContainerProps>`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  border-bottom: solid 1px #111318;

  h1,
  h2 {
    display: inline-flex;
    margin: 0;
    color: #525967;
  }

  h1 {
    margin-left: 24px;
    font-size: 36px;
    font-weight: 400;
    a:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }
  h2 {
    margin-right: 24px;
    font-size: 24px;
    font-weight: 700;
  }
`;

export default function Header({ title, subtitle }: Props) {
  return (
    <Container>
      <h1>
        <a href="/">{title}</a>
      </h1>
      <h2>{subtitle}</h2>
    </Container>
  );
}
