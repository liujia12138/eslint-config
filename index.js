module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    semi: ['error', 'never'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'nonblock-statement-body-position': ['error', 'beside'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-multi-spaces': 2,
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0
      }
    ],
    'padded-blocks': ['error', 'never'],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'no-undef': 'error',
    'no-unused-vars': [
      'error',
      {
        caughtErrors: 'none'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'no-useless-escape': 'error',
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'no-new-object': 'error',
    'object-shorthand': ['error', 'methods'],
    'quote-props': ['error', 'as-needed'],
    'no-new-func': 'error',
    'prefer-arrow-callback': 'error',
    'no-param-reassign': 'warn',
    'wrap-iife': ['error', 'any'],
    'func-call-spacing': 'error',
    eqeqeq: [
      'warn',
      'always',
      {
        null: 'ignore'
      }
    ],
    'no-unneeded-ternary': 'error',
    'no-mixed-operators': 'error',
    'no-fallthrough': 'error',
    'no-debugger': 'off',
    'no-console': 'off',
    'spaced-comment': ['error', 'always'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true
      }
    ],
    camelcase: [
      'warn',
      {
        properties: 'always'
      }
    ],
    'dot-location': [2, 'property'],
    'jsx-quotes': [2, 'prefer-single']
  }
}
