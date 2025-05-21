const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    video: true,
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber())
    },

    defaultCommandTimeout: 10000,
  },
});
