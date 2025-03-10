import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    ignores: [
      // Build output
      'dist/',

      // Generated types
      '.astro/',

      // Dependencies
      'node_modules/',

      // Logs
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',

      // Environment variables
      '.env',
      '.env.production',

      // macOS-specific files
      '.DS_Store',

      // JetBrains setting folder
      '.idea/',

      // Other
      '.vscode/',
      'icons/',
      'src/assets/',
      'astro.config.mjs',
    ],
  },
];
