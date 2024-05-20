// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    unocss: true,
  },
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './apps/*/tsconfig.json'],
      },
    },
  },
  {
    rules: {
      'ts/no-redeclare': 'off',
      'ts/consistent-type-definitions': [
        'error',
        'type',
      ],
      'antfu/top-level-function': 'off',
      'vue/valid-v-slot': ['error', {
        allowModifiers: true,
      }],
      'style/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      }],
      'functional/no-classes': 'off',
    },
  },
)
