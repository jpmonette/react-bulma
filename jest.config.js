module.exports = {
  verbose: true,
  collectCoverage: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "__tests__/util/"],
  testRegex: "(/__tests__/.*\\.spec)\\.(tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
