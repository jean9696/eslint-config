module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions":  {
    "ecmaVersion":  2018,
    "sourceType":  "module",
    "ecmaFeatures":  {
      "jsx":  true
    }
  },
  "extends": [
    "react-app",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "jest",
    "react-hooks",
    "import-helpers",
  ],
  "rules": {
    /**
     * Vanilla ESLint
     */
    "no-redeclare": "error",
    "no-console": "error",
    "no-shadow": ["error", { "allow": ["_", "e"] }],
    "prefer-template": "error",
    "no-empty": "error",
    "no-debugger": "warn",
    "no-unused-vars": "off", // Use TS rule

    /**
     * Prettier
     */
    "prettier/prettier": ["warn", {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": false,
      "singleQuote": true,
      "prefer-template": true
    }],

    /**
     * React Hooks
     */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    /**
     * TypeScript
     */
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],

    /**
     * Import Helpers
     */
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "module",
          "/^@habx/",
          "/^@components/",
          [
            "/^@assets/",
            "/^@api/",
            "/^@config/",
            "/^@constants/",
            "/^@fonts/",
            "/^@globalTypes/",
            "/^@helpers/",
            "/^@hooks/",
            "/^@lib/",
            "/^@logic/",
            "/^@pages/",
            "/^@puppeteer/",
            "/^@query/",
            "/^@routes/",
            "/^@style/",
            "/^@utils/",
          ],
          "parent",
          ["sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ],
  },
  "env": {
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "16.8.5"
    }
  },
  "globals": {
    "Sentry": true,
    "page": true,
    "browser": true,
    "context": true,
    "analytics": true,
    "location": true,
  }
}
