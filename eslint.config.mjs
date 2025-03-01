import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'antfu/top-level-function': ['off'],
    },
  },
  {
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
      'vue/no-multiple-template-root': ['off'],
    },
  },
)
