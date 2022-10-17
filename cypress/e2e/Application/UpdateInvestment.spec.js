/// <reference types="Cypress" />
import LoginPageApp_PO from "../../support/PageObject/Appllication/LoginPageApp";

const td = require("../../../TestData");

describe("Update investment limit and check last 12 month investment flow", () => {
  const loginpageapp_PO = new LoginPageApp_PO();

  before(() => {
    loginpageapp_PO.visitLoginPageApp();
    it("assert the last 12 month inestment flow", () => {
        cy.getByDataIcon('menu').click();
        cy.getByClass('_3f5bce54').invoke('text').each(($el)=> {
            if($el.includes('Account Settings')){
                cy.wrap($el).click();
            }
        });
        cy.getByClass('_3115699f').invoke('text').each(($el)=> {
            if($el.includes('Investment Limit')){
                cy.wrap($el).click();
            }
        });
        
    });
  });
});
