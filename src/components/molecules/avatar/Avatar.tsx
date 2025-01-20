import React, { ReactElement } from 'react';
import styled from 'styled-components';
import colors from '../../../colors';
import { getClassNames } from '../../../utils';
import { getInitialsFromName } from './utils';
import { fontFamily } from '../../../typography';

type AvatarWrapperProps = {};

const Wrapper = styled('div')<AvatarProps>`
  border-radius: 50%;
  padding: 8px;
  background-color: ${colors.black};
  color: ${colors.white};
  font-family: ${fontFamily.primary};
  font-weight: 800;
  display: inline-block;
  text-align: center;

  &.small {
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }
  &.medium {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
  }
  &.large {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 50px;
  }
`;

export interface AvatarProps {
  variant?: 'circle' | 'square' | 'text' | 'with badge';
  size?: 'small' | 'medium' | 'large' | string;
  children?: ReactElement | string;
}

export default function Avatar({
  variant = 'circle',
  size = 'medium',
  children,
}: AvatarProps) {
  let contentAvatar = children;
  const classNames = getClassNames([variant, size]);

  if (typeof children === 'string') {
    contentAvatar = getInitialsFromName(children);
  }

  return (
    <Wrapper variant={variant} size={size} className={classNames}>
      {contentAvatar}
    </Wrapper>
  );
}
