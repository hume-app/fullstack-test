module.exports = {
  extends: '@oscarltz/eslint-config/node',
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
  },
}
