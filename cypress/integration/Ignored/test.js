/// <reference types="Cypress" />

describe("Using request", () => {
   
    it("logging in ", () => {
        cy.request({
            failOnStatusCode: true,
            method: 'POST',
            url: 'https://api-dev.honeycombcredit.com/api/v1/users/login',
            body: {
              email: 'khubaib.ahmed+miner4111@carbonteq.com',
              password: 'Testing123$',
            },
          })
          });
    });
    
    
  
  