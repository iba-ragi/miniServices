module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true
//   },
//   extends: 'vue',
//   parserOptions: {
//     ecmaVersion: 2017
//   },
//   rules: {
//     quotes: ['error', 'single'],
//     semi: ['error', 'always'],
//     'no-constant-condition': 1,
//     'no-var': 2,
//     'prefer-const': 2
//   }
// }
