const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 50000,
  experimentalFetchPolyfill: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push("--incognito");                
            return launchOptions
        }

        if (browser.name === 'electron') {                
            launchOptions.preferences.incognito = true               
            return launchOptions
        }
        if (browser.name === 'Firefox') {                
          launchOptions.preferences.incognito = true               
          return launchOptions
      }
    })  
      // return require('./cypress/plugins/index.js')(on, config)
    },
   },
})
