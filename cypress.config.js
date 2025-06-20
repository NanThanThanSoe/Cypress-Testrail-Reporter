const { defineConfig } = require("cypress");
const baseUrl = 'https://google.com' // adjust to your localhost

module.exports = defineConfig({
  viewportHeight: 2000,
  viewportWidth: 1200,
  reporter: 'mochawesome',
  e2e: {
  
    async setupNodeEvents(on, config) {
      await require('cypress-testrail-simple/src/plugin')(on, config)
    },

    baseUrl: baseUrl,
  },
  reporterOptions: {
    configFile: "reporters.json"
  },  
});
