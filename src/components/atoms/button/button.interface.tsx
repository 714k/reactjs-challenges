import { ReactElement } from 'react';

export interface ButtonProps {
  /**
   * The color
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'text' | 'contained' | 'outlined';
  /**
   * What styles to use
   */
  style?: object;
  /**
   * What classname to use
   */
  classnames?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * How large should the button be?
   */
  rounded?: boolean;
  /**
   * Label of the button
   */
  label?: string;
  /**
   * Label of the button
   */
  ariaLabel?: string;
  /**
   * Add element at the start of the Button
   */
  startSlot?: ReactElement;
  /**
   * Add icon at the end of the Button
   */
  endSlot?: ReactElement;
  /** The button contains only icon
   */
  isButtonIcon?: boolean;
  /** The icon for button icon
   */
  icon?: ReactElement;
  /**
   * Optional click handler
   */
  onClick?: () => void | Function;
}
