const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1500,
  viewportWidth:1200,
  video:true,
  videoCompression: 0,
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
