module.exports = {
  "extends": "./index.js",
  "parser": "@typescript-eslint/parser",
  "parserOptions":  {
    "ecmaVersion":  2018,
    "sourceType":  "module",
    "ecmaFeatures":  {
      "jsx":  true
    }
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
}
