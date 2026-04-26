import clsx from 'clsx';

import { baseStyles } from './styles/button/base-styles';
import { variantStyles } from './styles/button/variant-styles';
import type ButtonProps from './types/button-props';

const Button = ({
  on_click,
  label,
  variant,
  disabled,
  additional_css,
  aria_label,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      aria-label={aria_label || label}
      className={clsx(baseStyles(), variantStyles(variant), additional_css)}
      disabled={disabled}
      onClick={on_click}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
