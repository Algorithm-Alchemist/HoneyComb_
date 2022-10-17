/// <reference types="Cypress" />
const td = require("../../../TestData");
import LoginPage_PO from "../../support/PageObject/AdminPanel/LoginPage";
import { CBdetails } from "../../../AdminData";
describe("Create User", () => {
  const loginpage_PO = new LoginPage_PO();
  before(() => {
    loginpage_PO.visitLoginPage();
  });

  it("Copy email from temp email site", async () => {
    cy.getByAriaLabel("user").click({ multiple: true });
    cy.getByHref("/users/create").click();
    cy.wait(2000);
    cy.getByPlaceholder("First Name").type(td.fname);
    cy.getByPlaceholder("Last Name").type(td.lname);
    cy.getByPlaceholder("Password").type(td.password);
    cy.getByPlaceholder("Email").type(CBdetails.Email); //
    cy.getByPlaceholder("PhoneNumber").type(td.Phoneno);
    cy.getByPlaceholder("000000000").type(td.SSNAdmin);
    cy.getByPlaceholder("Select date (MM-DD-YYYY)").click();

    async function getMonth() {
      return new Cypress.Promise((resolve, reject) => {
        cy.getByClass("ant-picker-month-btn")
          .invoke("text")
          .then((currentmonth) => {
            resolve(currentmonth);
          });
      });
    }
    for (let i = 0; i < 12; i++) {
      let month = await getMonth();
      if (month === "Feb") {
        break;
      } else {
        cy.getByClass("ant-picker-header-prev-btn").click();
      }
    }
    async function getYear() {
      return new Cypress.Promise((resolve, reject) => {
        cy.getByClass("ant-picker-year-btn")
          .invoke("text")
          .then((currentYear) => {
            resolve(currentYear);
          });
      });
    }
    for (let i = 0; i < 50; i++) {
      let myyear = await getYear();
      if (myyear == 1975) {
        break;
      } else {
        cy.getByClass("ant-picker-header-super-prev-btn").click();
      }
    }
    cy.get('td[title="1975-02-28"]').click();
    cy.getByPlaceholder("Address").type(td.StreetAddress);
    cy.getByID("state").click();
    cy.getByID("state").type("georgia");
    cy.getByTitle("Georgia").click();
    cy.getByPlaceholder("City").type(td.City);
    cy.getByPlaceholder("ZipCode").type(td.ZIP);
    cy.get('button[type="Submit"]').click();

    cy.intercept({
      method: "POST",
      url: "https://api-dev.honeycombcredit.com/api/v1/users?requestOrigin=ap",
    }).as("apiCheck");
    cy.wait("@apiCheck").its("response.statusCode").should("eq", 200);

    cy.writeFile("./data.json", JSON.stringify([CBdetails.Email]), {
      flag: "a+",
    });
  });
});
