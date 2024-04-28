module.exports = {
  "preset": "react-native",
  "moduleFileExtensions": ["js", "jsx", "ts", "tsx", "json"],
  "setupFiles": [
    "<rootDir>/node_modules/react-native/jest/setup.js",
  ],
  "transformIgnorePatterns": [
    "/node_modules/(?!(react-native|@react-native|react-navigation|@react-navigation|react-redux|redux)/)"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest" // Menambahkan transform untuk file JavaScript
  },
  "testMatch": [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  "modulePaths": [
    "node_modules"
  ]
}

