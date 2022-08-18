/// <reference types="Cypress" />
const td = require("../../../TestData");

describe("Check filters", () => {
  before(() => {
    cy.visit(td.urlLogin);

    cy.get("#login_email").type(td.Email);
    cy.get("#login_password").type(td.password);
    cy.get(".ant-form-item-control-input-content > .ant-btn").click();
    cy.wait(2000);
    cy.get(
      ".ant-drawer-body > :nth-child(1) > :nth-child(1) > .anticon > svg"
    ).click();
  });
  it("Search by Funded campaign", () => {
    cy.get(".ant-select-selector").click();
    cy.get("div[title='Funded Campaigns']").click({ force: true });
    cy.get(".e85f8daf").find('img[alt="Funded overlay image"]').as("funded");
    cy.get("@funded").should("be.ok");
  });

  it("Search by Active Campaign", () => {
    cy.get(".ant-select-selector").click();
    cy.get("div[title='Active Campaigns']").click({ force: true });
    cy.get(".ant-typography").should("not.contain.text", "Time Left: 0 days");
  });

  // it("Search by All Campaign", () => {
  //   cy.get(".ant-select-selector").click();
  //   if (
  //     cy
  //       .get(".ant-typography")
  //       .should("not.contain.text", "Time Left: 011 days") &&
  //     cy
  //       .get(".e85f8daf")
  //       .find('img[alt="Funded overlay image"]')
  //       .as("funded") &&
  //     cy.get("@funded").should("be.ok")
  //   ) {
  //     cy.log("working");
  //   } else {
  //     cy.log("not working");
  //   }
  // });
});
