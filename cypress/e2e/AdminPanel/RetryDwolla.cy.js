/// <reference types="Cypress" />
import Retry_User from "../../support/PageObject/AdminPanel/RetryUser";
import { CBdetails } from "../../../AdminData";
import {dwollaRetryUser} from '../../../AdminData'
import LoginPage_PO from "../../support/PageObject/AdminPanel/LoginPage";
import CreateBussiness_PO from "../../support/PageObject/AdminPanel/CreateBussinessPage";
import ExistingBusiness_PO from "../../support/PageObject/AdminPanel/Existingbusiness";
import UploadDwollaDoc_PO from '../../support/PageObject/AdminPanel/uploadDwollaDoc'

describe("Retry user dwolla flow", () => {
  const retryUser = new Retry_User();
  const loginpage = new LoginPage_PO();
  const createbusiness = new CreateBussiness_PO();
  const existingbusiness = new ExistingBusiness_PO();
  const uploaddwolladoc = new UploadDwollaDoc_PO();
  let ownerid;
  let IssuerID;
  let consentform;
  beforeEach(() => {
    loginpage.visitLoginPage();
  });
  after(()=> {
    cy.writeFile(
      "./data.json" , 
      JSON.stringify([CBdetails.Email, CBdetails.IssuerName , dwollaRetryUser.email , dwollaRetryUser.OwnerName]),
      { flag: 'a+' }
    );
  })
  it("create a user with retry", () => {
    retryUser.RetryUser();
    cy.wait(3000);
  });
  it("create a business with retry owner", async () => {
    createbusiness.CreateBussinessRetry();
    existingbusiness.selectExistingBusinessPage(CBdetails.IssuerName);

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

    IssuerID = await GetIssuerId();
    cy.log(IssuerID);

    cy.get("a > li").click();

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

    ownerid = await GetOwnerId();
    cy.log(ownerid);

    let baseurl =
      "https://application.honeycombcredit.com/repayment-consent-form/";
    consentform = baseurl + IssuerID + "/" + ownerid;
  });
  it("Accept the consent form", () => {
    cy.visit(consentform);
    cy.waitFor(consentform);
    cy.getByID("dwolla-form_businessType").click();
    cy.getByTitle("Accessories").click();
    cy.getByClass("ant-checkbox-input").check({ multiple: true });
    cy.getByClass("ant-btn-primary").click();
    cy.wait(3000);
    cy.waitFor(".ant-message");
    cy.getByClass("ant-message").contains(
      "Dwolla Business Customer with Controller Created Successfully"
    );
  });
  it("Assert Dwolla retry button is visible & test the positive flow by updating Valid document", () => {
    cy.getBySpanAriaLabel('span[aria-label="shop"]').click();
    existingbusiness.selectExistingBusinessPage(CBdetails.IssuerName);
    cy.contains("Retry Dwolla Business");
    cy.get('button:contains("Retry Dwolla Business")').click();
    cy.wait(7000);
    uploaddwolladoc.ValidDwollaDoc();
  });
});
