module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.js",
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    coverageThreshold: {
        // global: {
        //   branches: 80,    // Minimum coverage for branches
        //   functions: 80,   // Minimum coverage for functions
        //   lines: 80,       // Minimum coverage for lines
        //   statements: 80,  // Minimum coverage for statements
        // },
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(axios)/)',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
};
  