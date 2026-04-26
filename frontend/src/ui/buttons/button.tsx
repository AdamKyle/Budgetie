import clsx from 'clsx';
import React from 'react';

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
}: ButtonProps) => {
  return (
    <button
      onClick={on_click}
      className={clsx(baseStyles(), variantStyles(variant), additional_css)}
      aria-label={aria_label || label}
      disabled={disabled}
      role="button"
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
