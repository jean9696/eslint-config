module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions":  {
    "ecmaVersion":  2018,
    "sourceType":  "module",
    "ecmaFeatures":  {
      "jsx":  true
    }
  },
  "extends": ["react-app", "plugin:prettier/recommended"],
  "plugins": [
    "jest",
    "react-hooks",
    "import-helpers",
  ],
  "rules": {
    "prettier/prettier": ["warn", {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": false,
      "singleQuote": true,
      "prefer-template": true
    }],
    "no-redeclare": "error",
    "no-console": "error",
    "no-shadow": ["error", { "allow": ["_", "e"] }],
    "prefer-template": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-key": "error",
    "no-debugger": "warn",
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
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
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
    "location": true,
  }
}
