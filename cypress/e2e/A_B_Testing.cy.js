import { abTesting } from "../Pages/A_B_Testing";
import { basePage } from "../Pages/Base";

describe("A_B_Testing", () => {
  before(() => {
    cy.visit("/");
  });

  it("Verify content in the page", () => {
    cy.contains("A/B Testing").click();
    cy.get(basePage.LOCATORS.content).should(
      "contain",
      abTesting.NAMES.contentText
    );
  });
});
