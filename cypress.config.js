const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: '6rvnfr',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here. Cucumber plugin will pre-load for all tests
    },
    specPattern: "cypress/integration/examples/BDD/*.js",
    defaultCommandTimeout: 10000,
    //specPattern: "cypress/integration/examples/BDD/*.feature",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    reporter: "mochawesome",
    // base url is declared as env variable
    env: {
          url: "https://rahulshettyacademy.com/"
    },
    retries : {
          runMode: 1
    } 
  }
})


