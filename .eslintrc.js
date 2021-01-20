module.exports = {
  extends: ['eslint:recommended', 'plugin:mdx/recommended'],
  rules: {
    indent: ['error', 2],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-uses-vars': 2,
    'linebreak-style': 0,
  },
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'react',
  ],
  ignorePatterns: [
    'node_modules/*'
  ],
};