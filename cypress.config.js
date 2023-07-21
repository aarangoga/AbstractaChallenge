const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  pageLoadTimeout: 90000,
  chromeWebSecurity:false,
  defaultCommandTimeout: 15000,
  reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'mochawesome',
        mochawesomeReporterOptions: {
            reportDir: 'cypress/reports/mocha',
            quite: true,
            overwrite: false,
            html: false,
            json: true,
            pageLoadTimeout: 25000,
            reponseTimeout: 15000
        },
    },
  e2e: {
    baseUrl: 'http://opencart.abstracta.us',
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config)
      return config
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,cy}',
    slowTestThreshold: 20000,
    testIsolation: false,
    retries: {
        runMode: 0,
        openMode: 0
    }
  },
});
