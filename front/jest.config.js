module.exports = {
  verbose: true,
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/src/js/__test__/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/js/__test__/__mocks__/fileMock.js"
  }
}