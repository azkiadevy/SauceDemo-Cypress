const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'biwo8m',
  e2e: {
    baseUrl: "https://www.saucedemo.com",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  video: true,
  screenshotOnRunFailure: true,
});