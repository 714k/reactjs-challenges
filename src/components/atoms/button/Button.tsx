import { getClassNames } from '../../../utils';
import { ButtonProps } from './button.interface';
import { StyledButton } from './Button.styled';
import './button.css';

/**
 * BUtton component for user interaction
 */
export default function Button({
  classnames,
  color = 'primary',
  style,
  size = 'medium',
  rounded = false,
  label,
  ariaLabel,
  variant = 'contained',
  startSlot,
  endSlot,
  isButtonIcon = false,
  icon,
  onClick,
  ...props
}: ButtonProps) {
  const classNames = getClassNames([
    color,
    size,
    variant,
    rounded ? 'rounded' : '',
    classnames,
    isButtonIcon ? 'button-icon' : '',
  ]);

  return (
    <StyledButton
      type="button"
      style={style}
      className={classNames}
      data-is-button-icon={isButtonIcon}
      aria-label={
        isButtonIcon ? `icon ${icon?.props.icon.iconName}` : ariaLabel
      }
      onClick={onClick}
      {...props}
    >
      {isButtonIcon && icon}
      {!isButtonIcon && startSlot}
      {!isButtonIcon && label}
      {!isButtonIcon && endSlot}
    </StyledButton>
  );
}
