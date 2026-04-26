import type { ButtonVariant } from '../enums/button-variant';

export default interface LinkButtonProps {
  href: string;
  label: string;
  variant: ButtonVariant;
  additional_css?: string;
  aria_label?: string;
  on_click?: () => void;
}
