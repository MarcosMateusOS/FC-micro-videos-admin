import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  rootDir: "./src",
  transform: {
    "^.+\\.(t|j)s$": "@swc/jest",
  },
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
  setupFilesAfterEnv: [
    "./shared/infra/testing/expect-helpers.ts"]
};

export default config;
