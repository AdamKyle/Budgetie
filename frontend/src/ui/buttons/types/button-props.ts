import type { ButtonHTMLAttributes, MouseEventHandler } from 'react';

import type { ButtonVariant } from 'ui/buttons/enums/button-variant';

export default interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  disabled?: boolean;
  additional_css?: string;
  aria_label?: string;
  on_click?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}
