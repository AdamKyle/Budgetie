import type { ButtonVariant } from 'ui/buttons/enums/button-variant';

export default interface ButtonProps<T extends unknown[] = []> {
  on_click: (...args: T) => void;
  label: string;
  variant: ButtonVariant;
  disabled?: boolean;
  additional_css?: string;
  aria_label?: string;
}
