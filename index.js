module.exports = {
  "parser": "babel-eslint",
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
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-redeclare": "error",
    "no-console": "error",
    "prefer-template": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "error",
    "react/no-unused-prop-types": "warn",
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
    "jestPuppeteer": true,
    "analytics": true,
    "location": true,
    "mushu": true
  }
}
