/// <reference types="Cypress" />

describe("test user", () => {
  before(() => {});

  it("input valid details", () => {
    cy.visit("https://dev.admin.roomdb.io/login");
    cy.wait(5000);
    cy.getByPlaceholder("name@company.com").type("rootuser@roomdb.io");
    cy.getByPlaceholder("Password").type("Wv=sJi4^_3e=>8*/");
    cy.getByClass("btn-lg").click();
    cy.getByAHref("/calendar").click();
  });
});
