/// <reference types="Cypress" />
import LoginPage_PO from "../../../support/PageObject/AdminPanel/LoginPage";

describe("Create Bussiness wallet", () => {
  const loginpage_PO = new LoginPage_PO();

  before(() => {
    loginpage_PO.visitLoginPage();
    cy.getByDataIcon("wallet").click();
    cy.getByHref("/transferBusinessToBank").click();
    cy.waitFor('[data-icon="upload"]');
    cy.wait(2000);
    cy.getByDataIcon("delete").click({ force: true });
    cy.wait(2000);
  });

  it("input valid details and submit", () => {
    cy.get('input[type="file"]').attachFile("invalid header.csv");
    cy.getByClass("ant-message").contains("Headers does not match");
  });
});
