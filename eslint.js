// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  // parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    // 启用es6语法
    es6: true
  },
  extends: ['eslint:recommended'],
  // add your custom rules here
  rules: {
    // 缩进
    indent: [
      'error',
      2,
      {
        // switch语句的缩进风格
        SwitchCase: 1
      }
    ],
    semi: ['error', 'never'], // 语句强制分号结尾
    'comma-style': ['error', 'last'], // 不使用行首逗号
    'comma-dangle': ['error', 'never'],
    'nonblock-statement-body-position': ['error', 'beside'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    // 空格
    // 不能用多余的空格
    'no-multi-spaces': 2,
    // 要求块语句必须至少有一个前置空格
    'space-before-blocks': 'error',
    // 禁止函数圆括号之前有一个空格
    'space-before-function-paren': ['error', 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 'error',
    // 要求关键字之前至少有一个空格，关键字之后无空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: false
      }
    ],
    // 禁止小括号内左右两侧空格
    'space-in-parens': ['error', 'never'],
    // 禁止方括号内左右两侧空格
    'array-bracket-spacing': ['error', 'never'],
    // 要求大括号内左右两侧空格
    'object-curly-spacing': ['error', 'always'],
    //  箭头函数箭头左右空格
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
    // 对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 空行
    // 文件末尾保留一行空行
    'eol-last': ['error', 'always'],
    // 不允许多个空行
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
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-undef': 'error',
    'no-unused-vars': ['error', { caughtErrors: 'none' }],
    'no-use-before-define': ['error', { functions: true, classes: true }],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ], // 优先使用单引号
    'no-useless-escape': 'error',
    'no-array-constructor': 'error', // 禁止使用数组构造器
    'array-callback-return': 'error', // 某些数组方法的回调函数中必须包含 return 语句
    'no-new-object': 'error', // 禁止使用new Object()
    'object-shorthand': ['error', 'methods'],
    'quote-props': ['error', 'as-needed'],
    'no-new-func': 'error',
    'prefer-arrow-callback': 'error',
    'no-param-reassign': 'warn',
    'wrap-iife': ['error', 'any'], // 立即执行函数表达式的小括号风格
    'func-call-spacing': 'error', // 函数调用 函数名和括号之间不能有空格
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'no-unneeded-ternary': 'error',
    'no-mixed-operators': 'error',
    'no-fallthrough': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 要求在注释前有空格
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
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

    // JSX 属性中一致使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single']
  }
}
