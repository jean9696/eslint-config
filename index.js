module.exports = {
  "parser": "babel-eslint",
  "extends": ["react-app", "plugin:prettier/recommended"],
  "plugins": [
    "jest",
    "react-hooks",
    "import-helpers"
  ],
  "rules": {
    "prettier/prettier": ["warn", {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": false,
      "singleQuote": true,
      "prefer-template": true
    }],
    "no-console": "error",
    "prefer-template": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlines-between": "always",
        "groups": [
          ["builtin", "external", "internal"],
          ["/^@habx/"],
          ["/^@components/"],
          ["/^@utils/", "/^@redux-module/", "/^@style/", "/^@fonts/", "/^@api/", "/^@pages/", "/^@puppeteer/", "/^@lib/",  "/^@helpers/"],
          ["parent"],
          ["sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
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
