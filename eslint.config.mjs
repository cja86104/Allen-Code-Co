import js from "@eslint/js";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export default [
  {
    files: ["**/*.html"],
    plugins: { "@html-eslint": html },
    languageOptions: {
      parser: htmlParser,
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/indent": "off",
      "@html-eslint/require-doctype": "error",
      "@html-eslint/no-duplicate-id": "error",
      "@html-eslint/require-title": "error",
      "@html-eslint/no-extra-spacing-attrs": "off",
      "@html-eslint/require-closing-tags": ["error", { selfClosing: "never" }],
      "@html-eslint/attrs-newline": "off",
      "@html-eslint/no-multiple-empty-lines": "off",
      "@html-eslint/element-newline": "off",
      "@html-eslint/no-trailing-spaces": "off",
    },
  },
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        gsap: "readonly",
        ScrollTrigger: "readonly",
        Lenis: "readonly",
        SplitType: "readonly",
        Math: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      semi: ["warn", "always"],
      "no-console": "off",
    },
  },
];
