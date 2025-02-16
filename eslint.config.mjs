import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";

const esLint = [
  {
    ignores: ["node_modules/", "dist/", ".next/"], // Add ignored directories
  },
  {
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "max-len": ["error", { code: 150 }],
      "prefer-promise-reject-errors": "off",
      "react/jsx-filename-extension": "off",
      "no-return-assign": "off",
      "react/prop-types": "off",
      "import/prefer-default-export": "off",
      "no-use-before-define": "off",
      "click-events-have-key-events": "off",
      "no-static-element-interactions": "off",
      "prefer-destructuring": "warn",
      "react/display-name": "off",
      "func-names": "off",
      "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
      "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    },
  },
];

export default esLint;
