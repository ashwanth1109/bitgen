import { Linter } from 'eslint';

const config: Linter.Config = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-console': 'error',
  },
};

export = config;
