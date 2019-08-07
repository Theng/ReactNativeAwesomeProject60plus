module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "jest": true
  },
  "plugins": [
      "react"
  ],
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "rules": {
      "react/prop-types": 0,
      "react/no-string-refs": 0,
      "no-console": 0
  }
};