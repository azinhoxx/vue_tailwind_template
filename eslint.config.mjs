import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    vue: {
      overrides: {
        'vue/max-attributes-per-line': ['error', {
          singleline: 1,
          multiline: 1,
        }],
      },
    },
    typescript: true,
  },
  {
    ignores: ['./tsconfig.json'],
  },
  {
    rules: {
      'antfu/top-level-function': 'off',
      'ts/consistent-type-definitions': 'off',
      'ts/no-unsafe-function-type': 'off',
      'ts/no-empty-object-type': 'off',
      'import/first': 'off',
      'no-console': 'warn',
      'style/max-statements-per-line': ['error', { max: 2 }],
    },
  },
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './src/assets/main.css',
      },
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      'better-tailwindcss/multiline': ['warn', {
        group: 'emptyLine',
        lineBreakStyle: 'windows',
      }],
      'better-tailwindcss/no-unregistered-classes': ['off'],
    },
  },
)
