const td = require('../../../../TestData')
import {CPdetails} from '../../../../AdminData'

class CreateCampaign_PO {

    CreateCampaign() 
    {
        cy.getByClass('ant-menu-title-content').each(($el,index,$list)=> {
            if($el.text().includes('Campaigns')){
              cy.wrap($el).click();
            }
           });
        cy.get('a[href="/campaigns/create"]').click();
        cy.get("#campaignName").type(CPdetails.CampaignName);
        cy.get("#issuerId").click();
        cy.get("#issuerId")
        .type(CPdetails.CampaignName)
        .type('{enter}');  
        //cy.get('[title="coman"]').click();
        cy.get('#campaignStartDate').click();
        cy.get('.ant-picker-today-btn').click({ multiple: true });
        cy.get('#campaignStage').click();
        cy.get('[title="Fundraising"]').click();
        cy.get('#campaignDuration').type(CPdetails.CampaignDuration);
        cy.get('#investmentType').click();
        cy.get('[title="Debt"]').click();
        cy.get('[data-placeholder="Enter Summary"]').type(CPdetails.Text);
        cy.get('#campaignDocumentUrl').type(CPdetails.DocUrl);
        cy.get('[placeholder="Select time"]').click();
        cy.get('.ant-picker-now-btn').click();
        cy.get('#campaignTimezone').click();
        cy.get('#campaignTimezone').type('new');
        cy.get('[title="America/New_York"]').click();
        cy.get('#campaignMinimumAmount').type(CPdetails.MinFunding);
        cy.get('#campaignTargetAmount').type(CPdetails.MaxFunding);
        cy.get('#repaymentSchedule').click();
        cy.get('[title="Quarterly"]').click();
        cy.get('#collateral').type(CPdetails.Collateral);
        cy.get('#annualInterestRate').type(CPdetails.AnnualInterest);
        cy.get('#repaymentStartDate').click();
        cy.get('.ant-picker-today-btn').click({ multiple: true , force:true });
        cy.get('#loanDuration').click();
        cy.get('[title="1"]').click();
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
        cy.wait(6000);
        cy.get('[aria-label="logout"]').click();
    }

}
export default CreateCampaign_PO;