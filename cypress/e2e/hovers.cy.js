// import hover from 'hover'

describe("Hovers", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.contains("Hovers").click();
    });
    it("Verify the existence of Hovers page", () => {
      cy.url().should("include", "hovers");
      cy.get(".example").should("contain", "Hovers");
      cy.get(".example").should("contain", "Hover over the image for additional information");
      cy.get(".figure")
      .find('img')
        .should('be.visible')
    });
    it.only("Verify hovers on the images", () => {
        cy.hover()
    });
})