import clsx from 'clsx';

import type InputProps from './types/input-props';

const Input = ({
  id,
  label,
  name,
  type,
  autoComplete,
  placeholder,
  required = false,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-storm-dust-800 dark:text-storm-dust-100 text-sm font-semibold"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        aria-required={required}
        autoComplete={autoComplete}
        className={clsx(
          'border-storm-dust-300 w-full rounded-lg border bg-white px-4 py-3',
          'text-storm-dust-950 text-base shadow-sm transition',
          'placeholder:text-storm-dust-500',
          'focus:border-blue-bell-500 focus:ring-blue-bell-400 focus:ring-2 focus:outline-hidden',
          'dark:border-storm-dust-700 dark:bg-storm-dust-900 dark:text-storm-dust-50',
          'dark:placeholder:text-storm-dust-400 dark:focus:border-blue-bell-400 dark:focus:ring-blue-bell-600'
        )}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
};

export default Input;
