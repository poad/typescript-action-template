// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';

import github from 'eslint-plugin-github';

import tseslint from 'typescript-eslint';

import { includeIgnoreFile } from '@eslint/compat';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'node_modules/**/*',
      'dist',
    ],
    files: ['{src,test}/**/*.ts'],
    extends: [
      ...tseslint.configs.recommended,
    ],
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      github,
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/ts/indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
);
