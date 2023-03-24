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
  plugins: ['import'],
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
        after: false
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

    // dsas
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
    'jsx-quotes': [2, 'prefer-single'],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': ['error', 'always'],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-import-module-exports': 'off',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'off',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'off',
    'import/order': 'error',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off'
  }
}
