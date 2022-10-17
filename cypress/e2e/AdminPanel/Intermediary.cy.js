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
        cy.getByClass('ant-col-4 > .ant-btn').click();
        cy.getByID('isIntermediary').check();
        cy.getByPlaceholder('Intermediary Name').type("ok");
        cy.getByPlaceholder("Intermediary Name")
          .invoke('val')
          .then(sometext => { 
        cy.getByID('issuerId').click({force:true}); 
        cy.getbyTitle("Heavenly Chicken & Waffles LLC").click({multiple:true, force:true});
        cy.getByPlaceholder("PhoneNumber").type(td.Phoneno)
        cy.getByClass('ant-spin-container > .ant-btn > span').click();
        cy.wait(5000);
        cy.visit(td.urlLogin);
        cy.wait(4000);
        cy.getByClass('d71f231e').invoke('text').should('include', sometext);
        // cy.get('[data-icon="menu"]').click();
        cy.getByDataIcon("caret-down").click();
        cy.getByClass('ant-dropdown-menu-item').each(($el, index, $list) => {
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
