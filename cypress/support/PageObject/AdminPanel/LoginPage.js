const td = require('../../../../TestData')
//import {CBdetails} from '../../../AdminData'

class LoginPage_PO{
     visitLoginPage(){

    cy.visit(td.admnurl);
    cy.get('#email').type(td.admnMail);
    cy.get('#password').type(td.admnPass);
    cy.get('.ant-btn > span').click();
    cy.wait(2000);
   //  cy.get(
   //    ".ant-drawer-body > :nth-child(1) > :nth-child(1) > .anticon > svg"
   //  ).click();
   
   }
}
export default LoginPage_PO;