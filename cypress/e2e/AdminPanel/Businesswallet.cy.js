/// <reference types="Cypress" />
import LoginPage_PO from "../../support/PageObject/AdminPanel/LoginPage";
import CreateBussiness_PO from "../../support/PageObject/AdminPanel/CreateBussinessPage";
import ExistingBusiness_PO from "../../support/PageObject/AdminPanel/Existingbusiness";
import { CBdetails } from "../../../AdminData";
const td = require("../../../TestData");

describe("Create Bussiness wallet", () => {
  const loginpage_PO = new LoginPage_PO();
  const createbussiness_PO = new CreateBussiness_PO();
  const existingbusiness_PO = new ExistingBusiness_PO();

  before(() => {
    loginpage_PO.visitLoginPage();
  });

  it("input valid details and submit", async () => {
    createbussiness_PO.CreateBussiness();
    existingbusiness_PO.selectExistingBusinessPage(CBdetails.IssuerName);
    cy.wait(2000);
    async function GetIssuerId() {
      return new Cypress.Promise((resolve, reject) => {
        cy.xpath(
          '//*[@id="root"]/section/section/main/div/div[1]/div/div[2]/div[2]/table/tbody/tr[2]/td[1]/span'
        )
          .invoke("text")
          .then((issuerid) => {
            cy.log(issuerid);
            resolve(issuerid);
          });
      });
    }

    let IssuerID = await GetIssuerId();

    cy.get('a > li').click();

    async function GetOwnerId() {
      return new Cypress.Promise((resolve, reject) => {
        cy.xpath(
          '//*[@id="root"]/section/section/main/div/div[1]/div/div[12]/div[2]/table/tbody/tr[2]/td[1]/span'
        )
          .invoke("text")
          .then((OwnerId) => {
            resolve(OwnerId);
          });
      });
    }

    let ownerid = await GetOwnerId();
    let baseurl =
      "https://application.honeycombcredit.com/repayment-consent-form/";
    const consentform = baseurl + IssuerID + "/" + ownerid;

    cy.visit(consentform);
    cy.waitFor(consentform);
    cy.log(consentform)
    // cy.get("#dwolla-form_businessType").click();
    // cy.get('[title ="Accessories"]').click();
    // cy.get(".ant-checkbox-input").check({ multiple: true });
    // cy.get(".ant-btn-primary").click();
    
  });
});
