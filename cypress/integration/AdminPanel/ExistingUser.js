/// <reference types="Cypress" />
const td = require("../../../TestData");
import { CPdetails, UseOfFunds } from "../../../AdminData";

before(() => {
  cy.visit(td.admnurl);
  cy.get("#email").type(td.admnMail);
  cy.get("#password").type(td.admnPass);
  cy.get(".ant-btn > span").click();
  cy.wait(2000);
});

describe("Pagination test", () => {
  it("10 per page ", () => {
    cy.get('a[href="/users/list"]').click();
    cy.wait(1500);
    cy.get('span[class="ant-select-selection-item"]')
    .invoke('text')
    .then((pagination)=> {
        var  paginationno = pagination.split('/ page')[0]
        cy.log(pagination);
        expect(paginationno == 10);
    })

    cy.get('.ant-table-tbody').find('tr').should('have.length.lessThan', 12);
  });
  it("20 per page ", () => {
    cy.get('a[href="/users/list"]').click();
    cy.wait(1500);
    cy.get('.ant-select-selection-item').click();
    cy.get('[title="20 / page"]').click();
    cy.get('[title="20 / page"]').invoke('text').then((pagination)=> {
        var  paginationno = pagination.split('/ page')[0]
        cy.log(pagination);
        expect(paginationno == 20);
    })
    cy.wait(1000);
    cy.get('.ant-table-tbody').find('tr').should('have.length.lessThan', 22);
  });
  it("50 per page ", () => {
    cy.get('a[href="/users/list"]').click();
    cy.wait(1500);
    cy.get('.ant-select-selection-item').click();
    cy.get('[title="50 / page"]').click();
    cy.get('[title="50 / page"]').invoke('text').then((pagination)=> {
        var  paginationno = pagination.split('/ page')[0]
        cy.log(pagination);
        expect(paginationno == 20);
    })
    cy.wait(1000);
    cy.get('.ant-table-tbody').find('tr').should('have.length.lessThan', 52);
  });
  it("100 per page ", () => {
    cy.get('a[href="/users/list"]').click();
    cy.wait(1500);
    cy.get('.ant-select-selection-item').click();
    cy.get('[title="100 / page"]').click();
    cy.get('[title="100 / page"]').invoke('text').then((pagination)=> {
        var  paginationno = pagination.split('/ page')[0]
        cy.log(pagination);
        expect(paginationno == 20);
    })
    cy.wait(1000);
    cy.get('.ant-table-tbody').find('tr').should('have.length.lessThan', 102);
    
  });
});
