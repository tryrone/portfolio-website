module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: "18.2" } },
  ignorePatterns: ["dist/", "node_modules/"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: "^React$", argsIgnorePattern: "^_" },
    ],
  },
};
