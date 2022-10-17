/// <reference types="Cypress" />
const td = require("../../../TestData");
import { CPdetails , UseOfFunds } from "../../../AdminData";
import CreateCampaign_PO from '../../support/PageObject/AdminPanel/CreateCampaign';
import LoginPage_PO from   '../../support/PageObject/AdminPanel/LoginPage'
import LoginPageApp_PO from '../../support/PageObject/Appllication/LoginPageApp';
import CreateBussiness_PO from '../../support/PageObject/AdminPanel/CreateBussinessPage';


describe("Create Campaign", () => {
  const createcampaign_PO = new CreateCampaign_PO();
  const loginpage_PO = new LoginPage_PO(); 
  const loginPageApp_PO = new LoginPageApp_PO();
  const createbussiness_PO = new CreateBussiness_PO();

    beforeEach(() => {
     loginpage_PO.visitLoginPage();
    
    });

  it("input valid details and submit", () => {
    
    createbussiness_PO.CreateBussiness();
    createcampaign_PO.CreateCampaign();
   
  });

  it("update campaign media details" , () => {

   
   cy.getByClass('ant-menu-title-content').each(($el,index,$list)=> {
    if($el.text().includes('Campaigns')){
      cy.wrap($el).click();
    }
   });
    cy.getByAHref("/campaigns/list?nav").click();
    cy.getByPlaceholder("Filter campaign by name").type(CPdetails.CampaignName);
    cy.getByAriaLabel("search").click();
    cy.wait(3000)
    cy.getByClass('ant-table-row > .ant-table-cell-fix-left').find('a').click();
    cy.wait(3000);
    cy.getByClass('ant-col-24 > .ant-col > a > .ant-btn').click();
    cy.wait(4000);
    const imagefile = "petstore.jpg";
    cy.get('input[id="campaignMedia"]').attachFile(imagefile);
    // cy.xpath('//*[@id="root"]/section/section/main/div/div[2]/div[2]/form/div[2]/div/div/div/div/div/button').click();
    cy.getByID('tagIds').click();
    cy.getByTitle('Georgia').click();
    cy.getBySVGDataIcon("plus").click({multiple:true});
    cy.wait(5000);
    cy.getByID('roughBudget_0_name').type(UseOfFunds.Name);
    cy.getByID('roughBudget_0_minValue').type(UseOfFunds.TargetGoal);
    cy.getByID('roughBudget_0_maxValue').type(UseOfFunds.MaximumGoal);
    cy.getByButtonType("submit").click({multiple:true});
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
