const { defineConfig } = require("cypress");
const baseUrl = 'https://google.com' // adjust to your localhost

module.exports = defineConfig({
  viewportHeight: 2000,
  viewportWidth: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: baseUrl,
  },
  //reporterOptions: {
    //configFile: "reporters.json"
  //},  
});
