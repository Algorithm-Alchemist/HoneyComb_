/// <reference types="Cypress" />
import LoginPage_PO from "../../../support/PageObject/AdminPanel/LoginPage";

describe("Create Bussiness wallet", () => {
  const loginpage_PO = new LoginPage_PO();

  before(() => {
    loginpage_PO.visitLoginPage();
    cy.get('[data-icon = "wallet"]').click();
    cy.get('[href="/transferBusinessToBank"]').click();
    cy.waitFor('[data-icon="upload"]');
    cy.wait(2000);
    cy.get('[data-icon="delete"]').click({ force: true });
    cy.wait(2000);
  });

  it("input valid details and submit", () => {

    cy.get('input[type="file"]').attachFile("usernotexist.csv");
    cy.wait(10000);
    //cy.get('[aria-label="info-circle"]').trigger('mouseover')
    cy.get('[aria-label="info-circle"]').realHover();
    cy.wait(1000);
    cy.get(".ant-tooltip-inner")
      .should("be.visible")
      .and(
        "contains.text",
        "khubaib@carbonteq.com is not valid business emailkhubaib@carbonteq.com is not a valid investor email"
      );
   
  });
});
