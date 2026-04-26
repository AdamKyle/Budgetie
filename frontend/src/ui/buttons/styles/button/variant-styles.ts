import { match } from 'ts-pattern';

import { ButtonVariant } from '../../enums/button-variant';

export const variantStyles = (variant: ButtonVariant): string => {
  return match(variant)
    .with(
      ButtonVariant.DANGER,
      () =>
        'bg-persian-plum-600 hover:bg-persian-plum-500 focus:ring-persian-plum-400 dark:focus:ring-persian-plum-600'
    )
    .with(
      ButtonVariant.SUCCESS,
      () =>
        'bg-tom-thumb-600 hover:bg-tom-thumb-500 focus:ring-tom-thumb-400 dark:focus:ring-tom-thumb-600'
    )
    .with(
      ButtonVariant.PRIMARY,
      () =>
        'bg-blue-bell-600 hover:bg-blue-bell-500 focus:ring-blue-bell-400 dark:focus:ring-blue-bell-600'
    )
    .otherwise(() => '');
};
