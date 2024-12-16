const { defineConfig } = require('cypress');
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: 'e2e/**/*.{js,jsx,ts,tsx}',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 60000,
    supportFile: 'support/e2e.js', 
    setupNodeEvents(on, config) {
      config.env.ADMIN_EMAIL = process.env.ADMIN_EMAIL;
      config.env.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
      config.env.USER_EMAIL = process.env.USER_EMAIL;
      config.env.USER_PASSWORD = process.env.USER_PASSWORD;

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--allow-insecure-localhost');
          launchOptions.args.push('--ignore-certificate-errors');
        }
        return launchOptions;
      });

      return config;
    },
  },
});
