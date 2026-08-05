// @ts-check

import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  files: ['apphost.mts'],
  extends: [tseslint.configs.base],
  languageOptions: {
    parserOptions: {
      project: './tsconfig.apphost.json',
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    '@typescript-eslint/no-floating-promises': ['error', { checkThenables: true }],
  },
});
