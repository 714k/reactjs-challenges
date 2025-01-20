import React, { ReactElement } from 'react';
import { getClassNames, getClassNamesFromBoolean } from '../../../utils';
import {
  Wrapper,
  LabelContainer,
  Label,
  InputContainer,
  Input,
  StartSlot,
  EndSlot,
  HelperText,
} from './Textfield.styled';

export interface TextfieldProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  labelText: string;
  informativeText?: string;
  helperText?: string;
  labelPosition?: 'label-top' | 'label-left';
  id: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  rounded?: boolean;
  startSlot?: ReactElement | string;
  endSlot?: ReactElement;
}

export default function Textfield({
  labelText = 'Label',
  informativeText,
  helperText,
  labelPosition = 'label-top',
  type = 'text',
  placeholder,
  id = 'textfield-1',
  required = false,
  disabled = false,
  readOnly = false,
  value,
  rounded = false,
  startSlot,
  endSlot,
}: TextfieldProps) {
  const requiredClassName = getClassNamesFromBoolean({ required });
  const disabledClassName = getClassNamesFromBoolean({ disabled });
  const readOnlyClassName = getClassNamesFromBoolean({ readOnly });
  const roundedClassName = getClassNamesFromBoolean({ rounded });
  const helperTextClassName = getClassNamesFromBoolean({ helperText });
  const startSlotClassName = getClassNamesFromBoolean({ startSlot });

  const classNamesLabel = getClassNames([
    labelPosition,
    disabledClassName,
    readOnlyClassName,
  ]);
  const classNamesLabelContainer = getClassNames([
    'label-container',
    labelPosition,
  ]);
  const classNamesInputContainer = getClassNames([
    'input-container',
    labelPosition,
    roundedClassName,
    disabledClassName,
  ]);

  const classNamesWrapper = getClassNames([labelPosition]);
  const classNamesHelperText = getClassNames([helperTextClassName]);
  const classNamesInput = getClassNames([
    labelPosition,
    requiredClassName,
    startSlotClassName,
  ]);

  return (
    <Wrapper className={classNamesWrapper}>
      <LabelContainer className={classNamesLabelContainer}>
        <Label htmlFor={id} className={classNamesLabel}>
          {labelText} {required && '*'}
        </Label>
        {informativeText && (
          <p className="informative-text">{informativeText}</p>
        )}
      </LabelContainer>
      <InputContainer className={classNamesInputContainer}>
        {startSlot && <StartSlot>{startSlot}</StartSlot>}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          className={classNamesInput}
        />
        {endSlot && <EndSlot>{endSlot}</EndSlot>}
      </InputContainer>
      {helperText && (
        <HelperText className={classNamesHelperText}>{helperText}</HelperText>
      )}
    </Wrapper>
  );
}
