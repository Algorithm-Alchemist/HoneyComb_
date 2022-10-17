// /// <reference types="Cypress" />
// class TempEmail_PO {
//   async getTempEmail() {
//     return new Cypress.Promise((resolve, reject) => {
//       cy.visit('https://generator.email')
//       cy.getByID("email_ch_text")
//         .invoke("text")
//         .then((mytext) => {
//           resolve(mytext);
//           cy.log(mytext);
//         });
//     });
//   }
//    ClickTempEmail() {
   
//       cy.visit('https://generator.email')
//       cy.wait(3000)
    
//   }
// }
// export default TempEmail_PO;