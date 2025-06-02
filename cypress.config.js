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
    baseUrl: "https://dev.findsocial.io/",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    includeShadowDom: true,
    testIsolation: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      username: "test09",
      password: "Laiba77@",
      invalidUsername: "test@hmail.com",
      invalidPassword: "Laiba88@",
      existUser: "automation",
      existEmail: "laibalg6117+12@gmail.com",
      existPass: "Laiba77@",
      newUser: "dummy30",
      newEmail: "laibalg6117+31@gmail.com",
      newPass: "Laiba77@",
    },
  },
});

