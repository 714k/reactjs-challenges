import styled from 'styled-components';
import colors from '../../../colors';

export type WrapperProps = {};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.label-left {
    flex-direction: row;
  }
`;

export type LabelContainerProps = {};

export const LabelContainer = styled.div<LabelContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  &.label-left {
    justify-content: center;
    margin-right: 8px;
  }

  .informative-text {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    margin: 0;
    display: block;
  }
`;

export type LabelProps = {};

export const Label = styled.label<LabelProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  display: flex;

  &.label-top {
    flex-direction: column;
  }
  &.label-left {
    display: inline;
  }

  &.disabled {
    color: ${colors.disabled.label};
  }
`;

export type InputContainerProps = {};

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 4px;
  border: solid 1px ${colors.primary.main};

  &.label-top {
    margin-top: 4px;
  }

  &.rounded {
    border-radius: 30px;
  }

  &.disabled {
    border-color: ${colors.disabled.border};
  }
`;

export type InputProps = {};

export const Input = styled.input<InputProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 4px;
  border: none;
  display: flex;
  border: none;
  outline: none;

  &[attribute='password'] {
    .button-icon {
      width: 24px;
      height: 24px;
    }
  }

  &::placeholder {
    color: ${colors.disabled.label};
  }

  &.start-slot {
    padding-left: 4px;
  }

  &:focus {
    outline: none;
  }
`;

export type StartSlotProps = {};

export const StartSlot = styled.span<StartSlotProps>`
  display: flex;
  justify-content: center;
  color: ${colors.gray[60]};
  height: 24px;
  line-height: 24px;
  width: 20px;
  font-size: 24px;
`;

export type EndSlotProps = {};

export const EndSlot = styled.span<EndSlotProps>`
  display: flex;
  height: 24px;
  button.outlined {
    border: none;
    height: 24px;
    width: 24px;
    &:focus {
      background-color: ${colors.primary.light};
    }
  }
`;

export type HelperTextProps = {};

export const HelperText = styled.span<HelperTextProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  display: block;
  margin-top: 4px;
`;
