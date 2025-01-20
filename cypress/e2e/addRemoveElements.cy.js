import { addRemoveElements } from "../Pages/addRemoveElements";
import { basePage } from "../Pages/Base";

describe("Add_Remove_Elements", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(addRemoveElements.NAMES.contentText).click();
  });

  it("Verify the button color", () => {
    cy.url().should("include", addRemoveElements.NAMES.urlPath);
    cy.get(basePage.LOCATORS.content).should(
      "contain",
      addRemoveElements.NAMES.contentText,
      "have.css",
      "background-color",
      addRemoveElements.COLORS.blue
    );
  });

  it('Check "Add Element" button', () => {
    cy.get(addRemoveElements.LOCATORS.addElementButton)
      .find("button")
      .then((btn) => {
        expect(btn).to.contain(
          addRemoveElements.NAMES.addElementButtonuttonName
        );
        cy.wrap(btn).click();
        cy.reload();
        cy.wrap(btn).should("not.exist");
      });
  });
});

it("Click add element button 10times", () => {
  cy.visit("/add_remove_elements/");
  Cypress._.times(10, () => {
    cy.contains("Add Element").click({ force: true }, { timeout: 400 });
  });
  cy.get(".added-manually").its("length").should("eq", 10);
});
