/// <reference types="Cypress" />

const pdf1 = "baselinePdf.pdf"
const pdf2 = "actualPdf.pdf"
describe("ToDo React", () => {

    it("should show the correct page title", async () => {
        cy.task("pdfCompare", {
            actualPdf: pdf2,
            baselinePdf: pdf1
        }).then((result) => {
            expect(result.status).to.equal("failed");
        });
    });
});
