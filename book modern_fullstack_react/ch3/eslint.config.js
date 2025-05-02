import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: ["eslint:recommended", "prettier"],
  },
];
