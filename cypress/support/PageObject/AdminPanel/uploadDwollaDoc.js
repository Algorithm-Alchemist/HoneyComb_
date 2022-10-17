const td = require("../../../../TestData");

class UploadDwollaDoc_PO {
  ValidDwollaDoc() {
    cy.getByAriaLabel("upload").click();
    cy.getByID("documentType").click();
    cy.getByTitle("License").click();
    const validdoc = "test-document-upload-success.png";
    cy.get('input[id="document"]').attachFile(validdoc);
    cy.get('button[type="submit"]').click();
  }
  InValidDwollaDoc() {
    cy.getByAriaLabel("upload").click();
    cy.getByID("documentType").click();
    cy.getByTitle("License").click();
    const Invaliddoc = "test-document-upload-fail.png";
    cy.get('input[id="document"]').attachFile(Invaliddoc);
    cy.get('button[type="submit"]').click();
  }
}
export default UploadDwollaDoc_PO;
