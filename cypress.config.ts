import { defineConfig } from "cypress";
const { isFileExist, findFiles } = require('cy-verify-downloads');


export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      on('task', { isFileExist, findFiles });
       config.defaultCommandTimeout = 20000;
       config.responseTimeout = 20000;

      // IMPORTANT return the updated config object
      return config;
    },
  },
});
