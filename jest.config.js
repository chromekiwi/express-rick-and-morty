/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
  testTimeout: 10000,
  setupFiles: ["./jest.setup.js"],
};

export default config;
