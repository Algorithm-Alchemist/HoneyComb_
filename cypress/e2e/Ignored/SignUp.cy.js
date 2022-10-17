/// <reference types="Cypress" />
const td = require("../../../TestData");
import TempEmail_PO from "../../support/PageObject/Appllication/TempEmail";
describe("signup user", () => {
  const TempEmail = new TempEmail_PO();
  let tempemail;
  let campaignselected;
  it("Copy the temp email", async () => {
    const temporaryemails = await TempEmail.getTempEmail();
    cy.log(temporaryemails);
    cy.task('setTempEmail', temporaryemails);
  });
  it("Open the honeycomb signup and paste the temp email", async() => {
   
   async function TemporaryEmail(){ 
   return new Cypress.Promise((resolve,reject) => {
    cy.task('getTempEmail').then((temporaryemails)=> {
       resolve(temporaryemails)
    })
  });
}
  tempemail = await TemporaryEmail();
    cy.visit(td.AppUrl);
    cy.wait(5000);
    cy.get("._0efc4de2").each(($el, index, $list) => {
      if (index == 1) {
        campaignselected = $el.text();
        cy.wrap($el).click();
      }
    });
    cy.wait(4000);
    cy.get('button:contains("Invest")').click();
    cy.wait(4000);
    cy.get('._1d132e01 > :nth-child(2) > a').click();
    cy.wait(3000);
    cy.getByPlaceholder("email").type(tempemail);
    cy.getByPlaceholder("password").type(td.password);
    cy.wait(2000);
    cy.get('button:contains("Next")').click();
    cy.wait(2000);
    cy.url().should('eq', td.verifyemail)
  });
  // it('click on the verify email' , async()=> {
  //   TempEmail.ClickTempEmail();
  // })
});
