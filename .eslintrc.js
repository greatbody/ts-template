module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    "console": "readonly"
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-undef": "warn",
    "no-console": "off",
    "semi": ['error', 'always']
  },
};
