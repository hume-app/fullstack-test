module.exports = {
  extends: "@oscarltz/eslint-config/react",
  parserOptions: {
    project: require.resolve("./tsconfig.json"),
  },
  settings: {
    jest: { version: 27 },
  },
};
