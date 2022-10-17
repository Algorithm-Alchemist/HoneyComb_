/// <reference types="Cypress" />
import LoginPageApp_PO from "../../support/PageObject/Appllication/LoginPageApp";
describe("Create Bussiness", () => {
  const loginpage_PO = new LoginPageApp_PO();

  before(() => {
    cy.viewport("iphone-x");
  });

  it("input valid details and submit", () => {
    loginpage_PO.visitLoginPageApp();
  });
});
