// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const td = require("../../TestData");
import "cypress-file-upload";
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("Login", () => {
  cy.clearLocalStorage();
  cy.clearCookies();
  cy.visit(td.urlLogin);
  Cypress.session.clearAllSavedSessions();
  cy.wait(3000);
  cy.get("#login_email").type(td.TestEmail);
  cy.get("#login_password").type(td.password);
  cy.get(".ant-form-item-control-input-content > .ant-btn").click();
  cy.wait(2000);
  cy.get('[data-icon="close"]').click();
});

Cypress.Commands.add("InvestmentLogin", () => {
  cy.clearLocalStorage();
  cy.clearCookies();
  cy.visit(td.urlLogin);

  Cypress.session.clearAllSavedSessions();
  cy.wait(3000);
  cy.get("#login_email").type(td.invesmentEmail);
  cy.get("#login_password").type(td.password);
  cy.get(".ant-form-item-control-input-content > .ant-btn").click();
  cy.wait(2000);
  cy.get('[data-icon="close"]').click();
});

Cypress.Commands.add('getByClass', (selector)=> {
  return cy.get(`.${selector}`)
});

Cypress.Commands.add('getByID', (selector)=> {
  return cy.get(`#${selector}`)
});

Cypress.Commands.add('getByPlaceholder', (selector, ...args)=> {
  return cy.get(`input[placeholder="${selector}"]`, ...args);
});

Cypress.Commands.add('getByAriaLabel', (selector, ...args)=> {
  return cy.get(`[aria-label="${selector}"]`, ...args);
});

Cypress.Commands.add('getByDataMenuID', (selector, ...args)=> {
  return cy.get(`[data-menu-id="${selector}"]`, ...args);
});

Cypress.Commands.add('getByHref', (selector, ...args)=> {
  return cy.get(`[href="${selector}"]`, ...args);
});

Cypress.Commands.add('getByTitle', (selector, ...args)=> {
  return cy.get(`[title="${selector}"]`, ...args);
});


