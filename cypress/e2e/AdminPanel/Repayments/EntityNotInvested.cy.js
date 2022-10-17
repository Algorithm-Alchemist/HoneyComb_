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
    cy.get('[data-icon="delete"]').click({ force: true });
    cy.wait(2000);
  });

  it("input valid details and submit", () => {

    cy.get('input[type="file"]').attachFile("EntityNotInvested.csv");
    cy.wait(10000);
    cy.getByAriaLabel("info-circle").realHover();
    cy.wait(1000);
    cy.getByClass("ant-tooltip-inner")
      .should("be.visible")
      .and(
        "contains.text",
        "No investment found for miner56 in registers campaign campaign"
      );
   
  });
});
