/// <reference types="Cypress" />
const td = require("../../../TestData");
describe("Verify Percentage bar in campaign", () => {
  before(() => {
    cy.visit(td.urlLogin);

    cy.getByID("login_email").type(td.TestEmail);
    cy.getByID("login_password").type(td.password);
    cy.getByClass("ant-form-item-control-input-content > .ant-btn").click();
    cy.wait(2000);
    cy.getByClass(
      "ant-drawer-body > :nth-child(1) > :nth-child(1) > .anticon > svg"
    ).click();
  });
  it("check min target and compare with funded", () => {
    cy.get(
      ":nth-child(3) > a > .ant-card > .ant-card-body > ._45973e21 > ._178d3ee9 > ._536a098e > :nth-child(2)"
    )
      .invoke("text")
      .then((MinTarget) => {
        var MinTargetOg = MinTarget.split("Minimum Target: $")[1];
        cy.log(MinTargetOg);

        cy.get(
          ":nth-child(3) > a > .ant-card > .ant-card-body > ._45973e21 > ._178d3ee9 > ._536a098e > :nth-child(1)"
        )
          .invoke("text")
          .then((FundedVal) => {
            var FundedValOg = FundedVal.split("Funded: $")[1];
            cy.log(FundedValOg);
            cy.getByClass(
              "ant-row.ant-row-start.cd30ea76 > div:nth-of-type(3) .ant-card-body .ant-col.ant-col-24 > div > div"
            )
              .invoke("text")
              .then((Percent) => {
                var PercentOg = Percent.split("%")[0];
                cy.log(PercentOg);
              // condition to check that recovered percentage by comapring funded amount and min target to check percentage //
                if (MinTargetOg <= FundedValOg && PercentOg >= 100) {
                  expect(true).to.be.true;
                } else if (MinTargetOg <= FundedValOg && PercentOg <= 100) {
                  expect(true).to.be.false;
                } else if (MinTargetOg > FundedValOg && PercentOg < 100) {
                  expect(true).to.be.true;
                } else if (MinTargetOg > FundedValOg && PercentOg > 100) {
                  expect(true).to.be.false;
                }
              });
          });
      });
  });
});
