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
    cy.get('input[type="file"]').attachFile("Valid.csv");
    cy.wait(10000);
    cy.getByClass("ant-table-cell").each(($el, index, $list) => {
      if ($el.text().includes("failed")) {
        expect(true).to.be.false;
      }
    });
  });
});
