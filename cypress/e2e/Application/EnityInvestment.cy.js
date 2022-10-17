/// <reference types="Cypress" />
import LoginPageApp_PO from "../../support/PageObject/Appllication/LoginPageApp";
import IndInvestment from "../../support/PageObject/Appllication/investment";
import ExtractTotalInvested from "../../support/PageObject/Appllication/ExtractTotalInvested";
const td = require("../../../TestData");

describe("Making sure investment as a individual and as a intermediary are accurate", () => {
  const loginpageapp_PO = new LoginPageApp_PO();
  const indinvestment = new IndInvestment();
  const extracttotalinvested = new ExtractTotalInvested();
  beforeEach(() => {
    loginpageapp_PO.InvestmentLoginPageApp();
  });

  it("investing on a campaign as an indivisual", () => {
    extracttotalinvested.ExtractTotalInvested_Po().then(() => {
      let currentInvestmentIs = localStorage.getItem("key");
      let CurrentInvestmentToAssert = Number(
        currentInvestmentIs.replace(",", "")
      );
      let CurrentInvestmentToAssertIs = CurrentInvestmentToAssert + 500;
      cy.getByDataIcon("close").click({ force: true });
      cy.wait(1000);
      indinvestment.IndvisualInvesment_Po();
      cy.wait(1000);
      cy.getByID("custom-modal-close-icon").click({ force: true });
      cy.wait(1000);
      cy.getByAriaLabel("arrow-left").first().click({ force: true });
      cy.wait(1000);
      extracttotalinvested.ExtractTotalInvested_Po().then(() => {
        let updatedinvestment = localStorage.getItem("key");
        let updatedinvestmentis = Number(updatedinvestment.replace(",", ""));
        expect(CurrentInvestmentToAssertIs).to.eq(updatedinvestmentis);
      });
    });
  });

  it("Entity investment & applying assertion on investment", () => {
    extracttotalinvested.ExtractTotalInvestedEntity_Po().then(() => {
      let currentInvestmentIs = localStorage.getItem("key");
      let CurrentInvestmentToAssert = Number(
        currentInvestmentIs.replace(",", "")
      );
      let CurrentInvestmentToAssertIs = CurrentInvestmentToAssert + 500;
      cy.getByDataIcon("close").click({ force: true });
      cy.wait(1000);
      indinvestment.EntityInvestment_Po();
      cy.wait(1000);
      cy.getByID("custom-modal-close-icon").click({ force: true });
      cy.wait(1000);
      cy.getByAriaLabelt("arrow-left").first().click({ force: true });
      cy.wait(1000);
      extracttotalinvested.ExtractTotalInvestedEntity_Po().then(() => {
        let updatedinvestment = localStorage.getItem("key");
        let updatedinvestmentis = Number(updatedinvestment.replace(",", ""));
        expect(CurrentInvestmentToAssertIs).to.eq(updatedinvestmentis);
      });
    });
  });
});
