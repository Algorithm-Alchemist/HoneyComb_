const td = require('../../../../TestData')
import {CBdetails} from '../../../../AdminData'
class CreateBussiness_PO {
    CreateBussiness() {
        
        cy.get('span[aria-label="shop"]').click();
        cy.get('a[href="/issuers/create"]').click();
        cy.get('#issuerName').type(CBdetails.IssuerName);
        cy.get('#businessType').click();
        cy.get('[title="Sporting Goods"]').click();
        cy.get('#email').type(CBdetails.Email);
        cy.get('#EIN').type(CBdetails.EIN);
        cy.get('#legalEntityType').click();
        cy.get('[title="Partnership"] ').click();
        cy.get('#city').type(CBdetails.City);
        cy.get('#physicalAddress').type(CBdetails.Address);
        cy.get('#phoneNumber').type(CBdetails.PhoneNumber);
        cy.get('#state').click();
        cy.get('[title="Alaska"]').click();
        cy.get('#zipCode').type(CBdetails.ZipCode);
        cy.get('.ant-select-selection-overflow').click();
        cy.get('.ant-select-selection-overflow').type("mining21");
        cy.get('[title="JOHN SMITH - mining21"]').click();
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
        cy.wait(5000);
    }

}

export default CreateBussiness_PO;