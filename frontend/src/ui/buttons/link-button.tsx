import clsx from 'clsx';
import React from 'react';

import { linkButtonBaseStyles } from './styles/link-button/base-styles';
import { linkButtonVariantStyles } from './styles/link-button/variant-styles';
import type LinkButtonProps from './types/link-button-props';

const LinkButton = ({
  href,
  label,
  variant,
  additional_css,
  aria_label,
  on_click,
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      onClick={on_click}
      aria-label={aria_label}
      className={clsx(
        linkButtonBaseStyles(),
        linkButtonVariantStyles(variant),
        additional_css
      )}
    >
      {label}
    </a>
  );
};

export default LinkButton;
