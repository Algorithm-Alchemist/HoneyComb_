/// <reference types="Cypress" />
const td = require("../../../TestData");
import LoginPage_PO from   '../../support/PageObject/AdminPanel/LoginPage'
import ExistingUser_PO from '../../support/PageObject/AdminPanel/ExistingUsers';
import LoginPageApp_PO from '../../support/PageObject/Appllication/LoginPageApp';
import { CPdetails, UseOfFunds } from "../../../AdminData";


describe("Create Bussiness", () => 
{
    const existingUser_PO = new ExistingUser_PO();
    const loginpage_PO = new LoginPage_PO(); 
    const loginPageApp_PO = new LoginPageApp_PO();

    beforeEach(() => {
    loginpage_PO.visitLoginPage();
      });

  it("Search for the user and update the User", () => 
  {

        existingUser_PO.selectExistingUserPage();
        cy.get('.ant-col-4 > .ant-btn').click();
        cy.get('#isIntermediary').check();
        cy.get('[placeholder="Intermediary Name"]').type("ok");
        cy.get('[placeholder="Intermediary Name"]')
          .invoke('val')
          .then(sometext => { 
        cy.get('#issuerId').click({force:true}); 
        cy.get('[title="Heavenly Chicken & Waffles LLC"]').click({multiple:true, force:true});
        cy.get('input[placeholder="PhoneNumber"]').type(td.Phoneno)
        cy.get('.ant-spin-container > .ant-btn > span').click();
        cy.wait(5000);
        cy.visit(td.urlLogin);
        cy.wait(4000);
        cy.get('.d71f231e').invoke('text').should('include', sometext);
        // cy.get('[data-icon="menu"]').click();
        cy.get('[data-icon="caret-down"]').click();
        cy.get('.ant-dropdown-menu-item').each(($el, index, $list) => {
          if ($el.text().includes('Heavenly Chicken & Waffles LLC')){
            cy.log($el)
            cy.wrap($el).click({force:true});
            const textcheck= $el.text();
            expect(textcheck).includes('Heavenly Chicken & Waffles LLC');
          }
      });
    }); 
  });
});
