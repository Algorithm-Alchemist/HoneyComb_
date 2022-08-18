const td = require("../../../../TestData");
// import {CBdetails} from '../../../AdminData'

class LoginPageApp_PO {
  visitLoginPageApp() {
    cy.Login();
  }
  InvestmentLoginPageApp() {
    cy.InvestmentLogin();
  }
}

export default LoginPageApp_PO;
