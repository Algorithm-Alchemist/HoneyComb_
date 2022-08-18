/// <reference types="Cypress" />
const td = require("../../../TestData");
import { CPdetails , UseOfFunds } from "../../../AdminData";
import CreateCampaign_PO from '../../support/PageObject/AdminPanel/CreateCampaign';
import LoginPage_PO from   '../../support/PageObject/AdminPanel/LoginPage'
import LoginPageApp_PO from '../../support/PageObject/Appllication/LoginPageApp';



describe("Create Campaign", () => {
  const createcampaign_PO = new CreateCampaign_PO();
  const loginpage_PO = new LoginPage_PO(); 
  const loginPageApp_PO = new LoginPageApp_PO();

    beforeEach(() => {
     loginpage_PO.visitLoginPage();
    
    });

  it("input valid details and submit", () => {
    
    createcampaign_PO.CreateCampaign();
   
  });

  it("update campaign media details" , () => {

   // cy.get('[data-icon="sound"]').click();
   cy.getByClass('ant-menu-title-content').each(($el,index,$list)=> {
    if($el.text().includes('Campaigns')){
      cy.wrap($el).click();
    }
   });
    cy.get('a[href="/campaigns/list?nav"]').click();
    cy.get('[placeholder="Filter campaign by name"]').type(CPdetails.CampaignName);
    cy.get('[aria-label="search"]').click();
    cy.wait(3000)
    cy.get('.ant-table-row > .ant-table-cell-fix-left').find('a').click();
    cy.wait(3000);
    cy.get('.ant-col-24 > .ant-col > a > .ant-btn').click();
    cy.wait(4000);
    const imagefile = "potion.jpg";
    cy.get('input[id="campaignMedia"]').attachFile(imagefile);
    cy.get(':nth-child(2) > :nth-child(1) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click();
    cy.get('svg[data-icon="plus"]').click({multiple:true});
    cy.wait(5000);
    cy.get('#roughBudget_0_name').type(UseOfFunds.Name);
    cy.get('#roughBudget_0_minValue').type(UseOfFunds.TargetGoal);
    cy.get('#roughBudget_0_maxValue').type(UseOfFunds.MaximumGoal);
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
    cy.wait(5000);
  });

  it.skip("Assert that the campaign is created", () => {
    loginPageApp_PO.visitLoginPageApp();
    cy.get('._0efc4de2').each(($el, index, $list) => {
      if ($el.text().includes(CPdetails.CampaignName)){
        cy.log($el)

        cy.wrap($el);
        const textcheck= $el.text();
        expect(textcheck).includes(CPdetails.CampaignName);
      }
      // else {
      //   expect(true).eq(false);
      //   cy.log('not found');
      // }
  });
  });
});
