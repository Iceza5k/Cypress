const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    responseTimeout:60000,
    pageLoadTimeout:60000,
    video:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
