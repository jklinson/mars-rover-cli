module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
    "^.+\\.jsx?$": "babel-jest", // Transform JavaScript files using babel-jest
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map '@/' imports to the 'src/' directory
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
