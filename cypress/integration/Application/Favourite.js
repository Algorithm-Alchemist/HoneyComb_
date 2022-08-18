/// <reference types="Cypress" />
const td = require("../../../TestData");
describe("Check Favourites", () => {
  before(() => {
    cy.visit(td.urlLogin);

    cy.get("#login_email").type(td.TestEmail);
    cy.get("#login_password").type(td.password);
    cy.get(".ant-form-item-control-input-content > .ant-btn").click();
    cy.wait(2000);
    cy.get(
      ".ant-drawer-body > :nth-child(1) > :nth-child(1) > .anticon > svg"
    ).click();
  });
  it("check the number of favourties then assert with newly selected", () => {
    cy.wait(5000)
    cy.get(".ant-menu-title-content > .anticon > svg").click();
    cy.wait(5000)
    cy.get(".ant-list-item-no-flex")
      .invoke("text")
      .then((favorites) => {
        cy.log(favorites);
      });

      cy.get('.ant-drawer-body > :nth-child(1) > :nth-child(1) > .anticon > svg').click();
      cy.get(':nth-child(1) > .a3d0b8d9 > img').click();
      cy.get(':nth-child(2) > .a3d0b8d9 > img').click();
      cy.get(".ant-menu-title-content > .anticon > svg").click();
      cy.wait(5000);
      cy.get(".ant-list-item-no-flex")
      .invoke("text")
      .then((favorites) => {
        cy.log(favorites);
      }).should('not.contain' , 'Favorites (0)');
  });
});


