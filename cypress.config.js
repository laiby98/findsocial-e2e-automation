const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/integration/**/*.feature",
    setupNodeEvents,
    baseUrl: "https://dashboard.relevic.com/",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    includeShadowDom: true,
    testIsolation: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      username: "QA Automation Cypress",
      email: "qa+3@relevic.com",
    },
  },
});
