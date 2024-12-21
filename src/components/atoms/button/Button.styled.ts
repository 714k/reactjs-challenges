import styled from 'styled-components';
import colors from '../../../colors';

type StyledButtonProps = {
  'data-is-button-icon': boolean;
  'aria-label': string | undefined;
};

export const StyledButton = styled('button')<StyledButtonProps>`
  border: none;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;

  &.small {
    padding: 8px 16px;
  }
  &.medium {
    font-size: 14px;
    padding: 10px 18px;
  }
  &.large {
    font-size: 18px;
    padding: 12px 20px;
  }
  &.button-icon {
    padding: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;

    &.medium {
      font-size: 16px;
      width: 36px;
      height: 36px;
    }
    &.large {
      font-size: 18px;
      width: 46px;
      height: 46px;
    }
  }

  &.rounded {
    border-radius: 25px;
  }

  &.primary {
    background-color: ${colors.primary.main};
    color: ${colors.primary.light};
    &:hover {
      background-color: ${colors.primary.dark};
    }
  }
  &.secondary {
    background-color: ${colors.secondary.main};
    color: ${colors.secondary.light};
    &:hover {
      background-color: ${colors.secondary.dark};
    }
  }
  &.success {
    background-color: ${colors.success.main};
    color: ${colors.success.light};
    &:hover {
      background-color: ${colors.success.dark};
    }
  }
  &.warning {
    background-color: ${colors.warning.main};
    color: ${colors.warning.light};
    &:hover {
      background-color: ${colors.warning.dark};
    }
  }
  &.error {
    background-color: ${colors.error.main};
    color: ${colors.error.light};
    &:hover {
      background-color: ${colors.error.dark};
    }
  }

  &.outlined {
    background-color: transparent;
    border-style: solid;
    border-width: 2px;
    font-weight: 600;

    &.primary {
      border-color: ${colors.primary.main};
      color: ${colors.primary.main};
      &:hover {
        background-color: ${colors.primary.main}20;
      }
    }
    &.secondary {
      border-color: ${colors.secondary.main};
      color: ${colors.secondary.main};
      &:hover {
        background-color: ${colors.secondary.main}20;
      }
    }
    &.success {
      border-color: ${colors.success.main};
      color: ${colors.success.main};
      &:hover {
        background-color: ${colors.success.main}20;
      }
    }
    &.warning {
      border-color: ${colors.warning.main};
      color: ${colors.warning.main};
      &:hover {
        background-color: ${colors.warning.main}20;
      }
    }
    &.error {
      border-color: ${colors.error.main};
      color: ${colors.error.main};
      &:hover {
        background-color: ${colors.error.main}20;
      }
    }
  }

  &.text {
    background-color: transparent;
    font-weight: 600;
    &.primary {
      color: ${colors.primary.main};
      &:hover {
        background-color: ${colors.primary.main}20;
      }
    }
    &.secondary {
      color: ${colors.secondary.main};
      &:hover {
        background-color: ${colors.secondary.main}20;
      }
    }
    &.success {
      color: ${colors.success.main};
      &:hover {
        background-color: ${colors.success.main}20;
      }
    }
    &.warning {
      color: ${colors.warning.main};
      &:hover {
        background-color: ${colors.warning.main}20;
      }
    }
    &.error {
      color: ${colors.error.main};
      &:hover {
        background-color: ${colors.error.main}20;
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: solid 2px blue;
  }

  .startSlot {
    margin-right: 8px;
  }

  .endSlot {
    display: flex;
  }
`;
