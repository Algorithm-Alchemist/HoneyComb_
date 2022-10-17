/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (browser.family === "chromium" && browser.name !== "electron") {
      launchOptions.args.push("--incognito");
      return launchOptions;
    }

    if (browser.name === "electron") {
      launchOptions.preferences.incognito = true;
      return launchOptions;
    }
  });
};
module.exports = (on, config) => {
  on("task", {
    setTempEmail: (val) => {
      return (temporaryemails = val);
    },
    getTempEmail: () => {
        return temporaryemails;
      },
  });
};

