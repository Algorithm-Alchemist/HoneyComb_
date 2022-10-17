/// <reference types="Cypress" />
import LoginPage_PO from   '../../support/PageObject/AdminPanel/LoginPage'
import CreateBussiness_PO from '../../support/PageObject/AdminPanel/CreateBussinessPage';
const td = require('../../../TestData') 


describe('Create Bussiness', () => {
 const loginpage_PO = new LoginPage_PO(); 
 const createbussiness_PO = new CreateBussiness_PO();
 

before(() => {
  loginpage_PO.visitLoginPage();
   });
 


    it('input valid details and submit', () => {

        createbussiness_PO.CreateBussiness();

    });
}); 