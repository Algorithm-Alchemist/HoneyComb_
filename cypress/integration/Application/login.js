/// <reference types="Cypress" />
const td = require('../../../TestData')

describe('sign up the user', () => {
    it('log in through the new credentials & input valid details ', () => {
        cy.visit(td.urlLogin);
        cy.get('#login_email').type(td.Email);
        cy.get('#login_password').type(td.password);
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
        cy.wait(2000);
    cy.get(
      ".ant-drawer-body > :nth-child(1) > :nth-child(1) > .anticon > svg"
    ).click();
    });
});