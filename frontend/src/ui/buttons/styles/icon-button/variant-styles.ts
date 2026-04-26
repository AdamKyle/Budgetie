import { match } from 'ts-pattern';

import { ButtonVariant } from '../../enums/button-variant';

type IconButtonVariantStylesType = {
  button: string;
  icon: string;
};

export const iconButtonVariantStyles = (
  variant: ButtonVariant
): IconButtonVariantStylesType => {
  return match(variant)
    .with(ButtonVariant.Default, () => ({
      button: 'text-storm-dust-900 dark:text-storm-dust-50',
      icon: [
        'group-hover:bg-storm-dust-200',
        'group-focus-visible:bg-storm-dust-200',
        'dark:group-hover:bg-storm-dust-800',
        'dark:group-focus-visible:bg-storm-dust-800',
      ].join(' '),
    }))
    .with(ButtonVariant.PRIMARY, () => ({
      button: 'text-blue-bell-800 dark:text-blue-bell-100',
      icon: [
        'group-hover:bg-blue-bell-100',
        'group-focus-visible:bg-blue-bell-100',
        'dark:group-hover:bg-blue-bell-900',
        'dark:group-focus-visible:bg-blue-bell-900',
      ].join(' '),
    }))
    .with(ButtonVariant.SUCCESS, () => ({
      button: 'text-tom-thumb-800 dark:text-tom-thumb-100',
      icon: [
        'group-hover:bg-tom-thumb-100',
        'group-focus-visible:bg-tom-thumb-100',
        'dark:group-hover:bg-tom-thumb-900',
        'dark:group-focus-visible:bg-tom-thumb-900',
      ].join(' '),
    }))
    .with(ButtonVariant.DANGER, () => ({
      button: 'text-persian-plum-800 dark:text-persian-plum-100',
      icon: [
        'group-hover:bg-persian-plum-100',
        'group-focus-visible:bg-persian-plum-100',
        'dark:group-hover:bg-persian-plum-900',
        'dark:group-focus-visible:bg-persian-plum-900',
      ].join(' '),
    }))
    .otherwise(() => ({
      button: '',
      icon: '',
    }));
};
