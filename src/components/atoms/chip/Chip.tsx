import React, { ReactElement } from 'react';
import styled from 'styled-components';
import colors from '../../../colors';
import { getClassNames } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../button/Button';

type WrapperProps = {};

const Wrapper = styled('div')<WrapperProps>`
  border: none;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  border-radius: 25px;

  &.small {
    padding: 4px 12px;
  }
  &.medium {
    font-size: 14px;
    padding: 6px 14px;
    &.startSlot {
      padding-left: 6px;
      svg {
        margin-right: 6px;
        font-size: 18px;
      }
    }
  }
  &.large {
    font-size: 16px;
    padding: 8px 16px;
    &.startSlot {
      padding-left: 8px;
      svg {
        margin-right: 8px;
        font-size: 20px;
      }
    }
  }

  &.primary {
    background-color: ${colors.primary.light};
    color: ${colors.primary.main};
  }
  &.secondary {
    background-color: ${colors.secondary.light};
    color: ${colors.secondary.main};
  }
  &.success {
    background-color: ${colors.success.main};
    color: ${colors.success.light};
  }
  &.warning {
    background-color: ${colors.warning.main};
    color: ${colors.warning.light};
  }
  &.error {
    background-color: ${colors.error.main};
    color: ${colors.error.light};
  }

  &.outlined {
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
    font-weight: 600;

    &.primary {
      border-color: ${colors.primary.main};
      color: ${colors.primary.main};
    }
    &.secondary {
      border-color: ${colors.secondary.main};
      color: ${colors.secondary.main};
    }
    &.success {
      border-color: ${colors.success.main};
      color: ${colors.success.main};
    }
    &.warning {
      border-color: ${colors.warning.main};
      color: ${colors.warning.main};
    }
    &.error {
      border-color: ${colors.error.main};
      color: ${colors.error.main};
    }
  }

  &.deletable {
    display: flex;
    align-items: center;
    justify-items: center;
    padding-right: 4px;
    .button-icon {
      width: auto;
      height: auto;
      margin-left: 4px;
      background-color: transparent;
      color: inherit;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    &.small {
      .endSlot {
        font-size: 18px;
        margin-left: 0;
      }
    }
    &.medium {
      font-size: 14px;
      .endSlot {
        font-size: 22px;
        margin-left: 0;
      }
    }
    &.large {
      font-size: 18px;
      .endSlot {
        font-size: 24px;
        margin-left: 0;
      }
    }
  }

  &:focus {
    outline: solid 2px blue;
  }

  &.startSlot {
    display: flex;
    justify-items: center;
    align-items: center;
    padding-left: 6px;
    svg {
      margin-right: 4px;
      font-size: 14px;
    }
  }

  .endSlot {
    display: flex;
    margin-left: 4px;
  }
`;

export interface ChipProps {
  /**
   * The variants of the chip
   */
  variant: 'filled' | 'outlined' | 'clickable' | 'deletable';
  /**
   * The colors
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Label of the chip
   */
  label?: string;
  /**
   * Add icon at the start of the Button
   */
  startSlot?: ReactElement;
  /**
   * Add icon at the end of the chip
   */
  endSlot?: ReactElement;
  /**
   * Add icon at the end of the chip
   */
  deletable?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void | Function;
}

export default function Chip({
  color = 'primary',
  label = 'Chip',
  size = 'small',
  variant = 'filled',
  deletable = false,
  startSlot,
  endSlot,
  onClick,
}: ChipProps) {
  const classNames = getClassNames([
    color,
    size,
    variant,
    deletable && 'deletable',
    startSlot && 'startSlot',
    endSlot && 'endSlot',
  ]);
  return (
    <Wrapper className={classNames}>
      {startSlot}
      {label}
      {deletable && (
        <Button
          color={color}
          variant="contained"
          isButtonIcon={true}
          rounded={true}
          size="small"
          icon={<FontAwesomeIcon className="endSlot" icon={faCircleXmark} />}
          onClick={onClick}
        />
      )}
      {endSlot}
    </Wrapper>
  );
}
