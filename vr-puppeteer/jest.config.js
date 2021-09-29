const puppeteer_preset = require("jest-puppeteer/jest-preset");

const config = {
  globals: {
    "ts-jest": {},
  },
  ...puppeteer_preset,
  setupFilesAfterEnv: ["./setup-jest.js"],
};
module.exports = config;
