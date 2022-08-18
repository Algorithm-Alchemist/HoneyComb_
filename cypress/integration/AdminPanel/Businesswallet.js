/// <reference types="Cypress" />
import LoginPage_PO from   '../../support/PageObject/AdminPanel/LoginPage'
import CreateBussiness_PO from '../../support/PageObject/AdminPanel/CreateBussinessPage';
import ExistingBusiness_PO from '../../support/PageObject/AdminPanel/Existingbusiness';
import { CBdetails } from '../../../AdminData';
const td = require('../../../TestData') 


describe('Create Bussiness wallet', () => {
 const loginpage_PO = new LoginPage_PO(); 
 const createbussiness_PO = new CreateBussiness_PO();
 const existingbusiness_PO  = new ExistingBusiness_PO();
 

before(() => {
  loginpage_PO.visitLoginPage();
   });
 


    it('input valid details and submit', () => {

       createbussiness_PO.CreateBussiness();
        existingbusiness_PO.selectExistingBusinessPage(CBdetails.IssuerName);
        cy.wait(2000);
        cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div/div[2]/div[2]/table/tbody/tr[2]/td[1]').invoke("text")
        .then((issuerid) => {
          
          cy.log(issuerid);
          const ownerid = "/7f451e61-3af5-4cf9-b4c9-c5c321ebf8d6"
          const baseurl = "https://application.honeycombcredit.com/dwolla-business-consent-form/"
          const consentformURL= baseurl+issuerid+ownerid;
          cy.log(consentformURL);
          cy.visit(consentformURL);
          cy.waitFor(consentformURL);
          cy.get('#dwolla-form_businessType').click();
          cy.get('[title ="Accessories"]').click();
          cy.get('.ant-checkbox-input').check({multiple:true});
          cy.get('.ant-btn-primary').click();
          cy.waitFor('.ant-message');
          cy.get('.ant-message')
          .contains('Dwolla Business Customer with Controller Created Successfully');
        });
    });
}); 