/// <reference types="Cypress" />
import LoginPageApp_PO from "../../support/PageObject/Appllication/LoginPageApp";
import CreateBussiness_PO from "../../support/PageObject/AdminPanel/CreateBussinessPage";
const td = require("../../../TestData");

describe("On clicking the campaign name the description of the campaign should open", () => {
  const loginpageapp_PO = new LoginPageApp_PO();
  const createbussiness_PO = new CreateBussiness_PO();

  before(() => {
    loginpageapp_PO.visitLoginPageApp();
    //cy.visit("https://invest.honeycombcredit.com/");
  });
  it("clicking random campaign", () => {
    cy.getByClass("_0efc4de2").each(($el, index, $list) => {
      if (index == 1) 
       {
            const campaignName = $el.text();
            cy.wrap($el).click({ force: true });
            cy.wait(2000);
            cy.getByClass("_6bbda93d")
            .invoke("text")
            .then((campaignnametitle) => {
                expect(campaignName).equal(campaignnametitle);
            });
        }
    });
  });
});
