import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['node_modules/', 'dist/', '**/*.d.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        document: 'readonly',
        HTMLElement: 'readonly',
        window: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tseslint,
      '@stylistic': stylistic,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
      'unused-imports': unusedImports,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['api', './src/api'],
            ['assets', './src/assets'],
            ['components', './src/components'],
            ['constants', './src/constants'],
            ['contexts', './src/contexts'],
            ['hooks', './src/hooks'],
            ['pages', './src/pages'],
            ['types', './src/types'],
            ['utils', './src/utils'],
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      'prettier/prettier': 'error',

      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',

      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'before' },
            { pattern: 'api/**', group: 'internal', position: 'after' },
            { pattern: 'assets/**', group: 'internal', position: 'after' },
            { pattern: 'components/**', group: 'internal', position: 'after' },
            { pattern: 'constants/**', group: 'internal', position: 'after' },
            { pattern: 'contexts/**', group: 'internal', position: 'after' },
            { pattern: 'hooks/**', group: 'internal', position: 'after' },
            { pattern: 'pages/**', group: 'internal', position: 'after' },
            { pattern: 'types/**', group: 'internal', position: 'after' },
            { pattern: 'utils/**', group: 'internal', position: 'after' },
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      '@stylistic/max-len': [
        'error',
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],

      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-else-return': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
    },
  },
];