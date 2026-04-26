import { match } from 'ts-pattern';

import { ButtonVariant } from 'ui/buttons/enums/button-variant';

export const linkButtonVariantStyles = (variant: ButtonVariant): string => {
  return match(variant)
    .with(ButtonVariant.Default, () =>
      [
        'text-storm-dust-700 hover:bg-storm-dust-200 hover:text-storm-dust-950',
        'focus:ring-storm-dust-400',
        'dark:text-storm-dust-100 dark:hover:bg-storm-dust-800 dark:hover:text-storm-dust-50',
        'dark:focus:ring-storm-dust-500',
      ].join(' ')
    )
    .with(ButtonVariant.PRIMARY, () =>
      [
        'text-blue-bell-800 hover:bg-blue-bell-100 hover:text-blue-bell-950',
        'focus:ring-blue-bell-400',
        'dark:text-blue-bell-100 dark:hover:bg-blue-bell-900 dark:hover:text-blue-bell-50',
        'dark:focus:ring-blue-bell-500',
      ].join(' ')
    )
    .with(ButtonVariant.SUCCESS, () =>
      [
        'text-tom-thumb-800 hover:bg-tom-thumb-100 hover:text-tom-thumb-950',
        'focus:ring-tom-thumb-400',
        'dark:text-tom-thumb-100 dark:hover:bg-tom-thumb-900 dark:hover:text-tom-thumb-50',
        'dark:focus:ring-tom-thumb-500',
      ].join(' ')
    )
    .with(ButtonVariant.DANGER, () =>
      [
        'text-persian-plum-800 hover:bg-persian-plum-100 hover:text-persian-plum-950',
        'focus:ring-persian-plum-400',
        'dark:text-persian-plum-100 dark:hover:bg-persian-plum-900 dark:hover:text-persian-plum-50',
        'dark:focus:ring-persian-plum-500',
      ].join(' ')
    )
    .otherwise(() => '');
};
