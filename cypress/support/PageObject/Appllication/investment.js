const td = require('../../../../TestData')

class IndInvestment {
    IndvisualInvesment_Po(){
      cy.get('[data-icon="menu"]').click();
      cy.get('[data-icon="caret-down"]').click();
      cy.get('.ant-dropdown-menu-item-only-child').click();
      cy.get('[data-icon="close"]').click();
    
        cy.get("._0efc4de2").each(($el, index, $list) => {
            // const campaignNames = $el.text();
            // cy.log(campaignNames);
            if ($el.text().includes("Business Junction")) {
              cy.wrap($el).click();
            } else {
              cy.log("Campaign not found");
            }
          });
            cy.wait(2000)
            cy.get("._0b9fda82").click({force:true});
            cy.get('[placeholder="Input a number"]').type(500);
            cy.wait(2000)
            cy.get(".ant-btn").last().click();
      
              cy.get("._258f7692").each(($el) => {
                if ($el.text().includes("Confirm Payment Option")) {
                  cy.wrap($el).click();
                } else {
                  cy.log("Element not found ");
                }
               });
                cy.get("._258f7692").each(($el) => {
                  if ($el.text().includes("Yes")) {
                    cy.wrap($el).click();
                  } else {
                    cy.log("Element not found ");
                  }
              });
                  cy.get('input[type="checkbox"]').check({ multiple: true });
      
                  cy.get("._258f7692").click();
                  cy.wait(3000)
      
                  // // applying assertion that congratulations pop up appear to make sure investment is made
      
                  cy.get('.e45651eb').invoke('text').then((congrats)=> {
                  expect(congrats).includes('Congratulations, you’ve invested in')
                  });
    }
    EntityInvestment_Po() {
      cy.get('[data-icon="menu"]').click();
      cy.get('[data-icon="caret-down"]').click();
      cy.get('.ant-dropdown-menu-item').each(($el,index,$list)=> {
        if($el.text().includes('Coman')){
          cy.wrap($el).click();
        }
       })
      cy.get('[data-icon="close"]').click();

      cy.get("._0efc4de2").each(($el, index, $list) => {
        // const campaignNames = $el.text();
        // cy.log(campaignNames);
        if ($el.text().includes("Business Junction")) {
          cy.wrap($el).click();
        } else {
          cy.log("Campaign not found");
        }
      });
        cy.wait(2000)
        cy.get("._0b9fda82").click({force:true});
        cy.get('[placeholder="Input a number"]').type(500);
        cy.wait(2000)
        cy.get(".ant-btn").last().click();
  
          cy.get("._258f7692").each(($el) => {
            if ($el.text().includes("Confirm Payment Option")) {
              cy.wrap($el).click();
            } else {
              cy.log("Element not found ");
            }
           });
            cy.get("._258f7692").each(($el) => {
              if ($el.text().includes("Yes")) {
                cy.wrap($el).click();
              } else {
                cy.log("Element not found ");
              }
          });
              cy.get('input[type="checkbox"]').check({ multiple: true });
  
              cy.get("._258f7692").click();
              cy.wait(3000)
  
              // // applying assertion that congratulations pop up appear to make sure investment is made
  
              cy.get('.e45651eb').invoke('text').then((congrats)=> {
              expect(congrats).includes('Congratulations, you’ve invested in')
              });
    }
}
export default IndInvestment;