import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { fontFamily } from '../../../typography';

const Wrapper = styled.a`
  font-family: ${fontFamily.primary};

  &:hover {
    text-decoration: none;
  }
`;

export interface AnchorProps {
  href: string;
  children: string | ReactElement;
  title: string;
}

export default function Anchor({ href, children, title }: LinkProps) {
  return (
    <Wrapper href={href} title={title}>
      {children}
    </Wrapper>
  );
}
