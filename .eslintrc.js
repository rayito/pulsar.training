module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'indent': 'off',
    'func-names': 'off',
    'space-in-parens': 'off',
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'off',
    'object-shorthand': 'off',
  },
};
