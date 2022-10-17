/// <reference types="Cypress" />
const td = require("../../../TestData");
import { CPdetails, UseOfFunds } from "../../../AdminData";
import LoginPageApp_PO from '../../support/PageObject/Appllication/LoginPageApp'



describe("Create Bussiness", () => {

  const loginPageApp_PO = new LoginPageApp_PO();

  before(() => {
    
    loginPageApp_PO.visitLoginPageApp();
    
  });


  it("input valid details and submit", () => {
     cy.wait(2000);
      cy.getByClass("_0efc4de2").each(($el, index, $list) => {
         
          if ($el.text().includes("Top of the Muffin to You")) {
            cy.wrap($el).click();
          } 
        });
          cy.wait(2000)
          cy.getByClass("_0b9fda82").click({force:true});
          cy.getByPlaceholder("Input a number").type(500);
          cy.wait(2000)
          cy.getByClass("ant-btn").last().click();
    
            cy.getByClass("_258f7692").each(($el) => {
              if ($el.text().includes("Confirm Payment Option")) {
                cy.wrap($el).click();
              } else {
                cy.log("Element not found ");
              }
             });
              cy.getByClass("_258f7692").each(($el) => {
                if ($el.text().includes("Yes")) {
                  cy.wrap($el).click();
                } else {
                  cy.log("Element not found ");
                }
            });
                cy.get('input[type="checkbox"]').check({ multiple: true });
    
                cy.get("._258f7692").click();
                cy.wait(3000)
    
                // // applying assertion that congratulations pop up appear to make sure investment is made
    
                cy.getByClass('e45651eb').invoke('text').then((congrats)=> {
                expect(congrats).includes('Congratulations, you’ve invested in')
                });
  });
});