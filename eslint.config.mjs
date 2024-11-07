import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  stylistic: true,
}, {
  files: ['**/*.vue'],
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-custom-classname': 'off',
  },
}))
