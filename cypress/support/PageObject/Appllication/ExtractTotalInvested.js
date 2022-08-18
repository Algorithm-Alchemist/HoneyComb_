const td = require("../../../../TestData");

class ExtractTotalInvested {

  ExtractTotalInvested_Po() {
    cy.get('[data-icon="menu"]').click();
    cy.get('[data-icon="caret-down"]').click();
    // for myself in portfolio 
    cy.get('.ant-dropdown-menu-item-only-child').click();
    cy.get('[data-icon="close"]').click();
    cy.get('[data-icon="menu"]').click();
    // click on the portfolio button
    cy.get("._3f5bce54").each(($el, index, $list) => {
      if ($el.text().includes("Portfolio")) {
        cy.wrap($el).click();
      }
    });
    cy.wait(1000);
    // click on the business junction button
    cy.get(".d00e5d42").each(($el, index, $list) => {
      if ($el.text().includes("Business Junction")) {
        cy.wrap($el).click();
      }
    });

    // extract the total invested amount before the investment
    cy.wait(1000);
    return (
      cy
        .get(".c90b6aad")
        .invoke("text")
        //.as('textie')
        .then((CurrentInvestment) => {
          const currentInvestment = CurrentInvestment.substring(1);
          localStorage.setItem("key", currentInvestment);
          return Promise.resolve(() => {
            let testing = localStorage.getItem("key");
            cy.log(testing);
          });
        })
    );

  }

  ExtractTotalInvestedEntity_Po() {
    cy.get('[data-icon="menu"]').click();
    cy.get('[data-icon="caret-down"]').click();
    // for myself in portfolio 
   cy.get('.ant-dropdown-menu-item').each(($el,index,$list)=> {
    if($el.text().includes('Coman')){
      cy.wrap($el).click();
    }
   })
    cy.get('[data-icon="close"]').click();
    cy.get('[data-icon="menu"]').click();
    // click on the portfolio button
    cy.get("._3f5bce54").each(($el, index, $list) => {
      if ($el.text().includes("Portfolio")) {
        cy.wrap($el).click();
      }
    });
    cy.wait(1000);
    // click on the business junction button
    cy.get(".d00e5d42").each(($el, index, $list) => {
      if ($el.text().includes("Business Junction")) {
        cy.wrap($el).click();
      }
    });

    // extract the total invested amount before the investment
    cy.wait(1000);
    return (
      cy
        .get(".c90b6aad")
        .invoke("text")
        //.as('textie')
        .then((CurrentInvestment) => {
          const currentInvestment = CurrentInvestment.substring(1);
          localStorage.setItem("key", currentInvestment);
          return Promise.resolve(() => {
            let testing = localStorage.getItem("key");
            cy.log(testing);
          });
        })
    );

  }
}
export default ExtractTotalInvested;
