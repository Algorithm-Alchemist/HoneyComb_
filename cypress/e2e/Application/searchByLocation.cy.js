/// <reference types="Cypress" />
const td = require("../../../TestData");

describe("Check filters", () => {
  it("Search by Location", () => {
    cy.visit(td.urlLogin);
    cy.getByID("login_email").type(td.Email);
    cy.getByID("login_password").type(td.password);
    cy.get(".ant-form-item-control-input-content > .ant-btn").click();
    cy.wait(2000);
    cy.getByClass(
      "ant-drawer-body > :nth-child(1) > :nth-child(1) > .anticon > svg"
    ).click();
    //cy.get('input[placeholder="Search by location"]').type("atlanta");
    cy.getByPlaceholder("Search by location").type('atlanta');
    cy.getByClass("ant-typography").should("contain.text", "ATLANTA");
  });
});



