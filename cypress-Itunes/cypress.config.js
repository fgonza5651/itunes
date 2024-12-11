const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "http://localhost:8080/", // Cambia según tu proyecto
    chromeWebSecurity: false
  },
});
