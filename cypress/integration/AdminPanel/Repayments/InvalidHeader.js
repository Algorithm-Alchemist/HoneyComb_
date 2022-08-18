/// <reference types="Cypress" />
import LoginPage_PO from   '../../../support/PageObject/AdminPanel/LoginPage'



describe('Create Bussiness wallet', () => {
 const loginpage_PO = new LoginPage_PO(); 

 

before(() => {
  loginpage_PO.visitLoginPage();
  cy.get('[data-icon = "wallet"]').click();
  cy.get('[href="/transferBusinessToBank"]').click();
  cy.waitFor('[data-icon="upload"]');
  cy.wait(2000)
  cy.get('[data-icon="delete"]').click({force:true});
  cy.wait(2000);
   });
 


    it('input valid details and submit', () => {

              cy.get('input[type="file"]').attachFile('invalid header.csv');
              cy.get('.ant-message')
              .contains('Headers does not match'); 
          });
        });
