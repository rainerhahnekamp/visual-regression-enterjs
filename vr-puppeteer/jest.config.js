const puppeteer_preset = require("jest-puppeteer/jest-preset");

const config = {
  ...puppeteer_preset,
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
};

module.exports = config;
