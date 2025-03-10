import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierLint from 'eslint-plugin-prettier'
import prettier from 'prettier'
import unicorn from 'eslint-plugin-unicorn'
import pluginTsLint from '@typescript-eslint/eslint-plugin'
import unusedImports from 'eslint-plugin-unused-imports'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [ js.configs.recommended, ...tseslint.configs.recommended, prettierLint.configs.recommended,
      unicorn.configs.recommended, ...prettier.configs.recommended, ...pluginTsLint.configs.recommended
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      prettier,
      unicorn
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      //одинарная кавычка
      "prettier/prettier": [ 2, { singleQuote: true } ],
      "arrow-body-style": [ 'error', 'as-needed' ],
      'no-nested-ternary': "off",
      "no-unused-expressions": 'error',
      //вид компонента
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      //не используемые переменные
      "@typescript-eslint/no-used-vars": 1,
      "unused-imports/no-used-vars": [
        2,
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        }
      ],
      //неиспользуемые импорты
      "unused-imports/no-used-imports": 2,
      "react/react-in-jsx-scope": 2,
      //пустые строки
      "padding-line-between-statements": [
        2,
        { blankLine: "always", prev: "*", next: "block-line" },
        { blankLine: "always", prev: "*", next: ['interface', 'type'] },
        { blankLine: "always", prev: "*", next: 'return' },

        { blankLine: "always", prev: ["case", "default"], next: "*" },
        { blankLine: "always", prev: "multiline-expression", next: "*" },
        { blankLine: "always", prev: ["let", "const"], next: "expression" },
        { blankLine: "always", prev: "expression", next: ["let", "const"] },
      ],
      //проверка на наличие необязательного объекта
      "no-unsafe-optional-chaining": "error",
    },
  },
)
