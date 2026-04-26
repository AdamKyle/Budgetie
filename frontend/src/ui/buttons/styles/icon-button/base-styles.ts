import clsx from 'clsx';

export const iconButtonBaseStyles = (showLabel: boolean): string => {
  return clsx(
    'group inline-flex items-center gap-2 rounded-lg font-semibold',
    'transition focus:outline-hidden disabled:cursor-not-allowed',
    'disabled:opacity-60 cursor-pointer',
    showLabel ? 'w-full justify-start px-2 py-1' : 'h-10 w-10 justify-center'
  );
};

export const iconButtonIconBaseStyles = (): string => {
  return 'inline-flex h-10 w-10 items-center justify-center rounded-full transition';
};
