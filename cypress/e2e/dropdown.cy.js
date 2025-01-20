import { drop } from "lodash";
import { basePage } from "../Pages/Base";
import { dropdown } from "../Pages/dropdown";

const firstValue = "1";
const secondValue = "2";
const thirdValue = "3";
const optionOne = "Option 1";
const optionTwo = "Option 2";

describe("Dropdown", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains(dropdown.NAMES.contentTest).click();
    cy.url().should("include", dropdown.NAMES.urlPath);
  });

  it("Verify the dropdown menu on the page", () => {
    basePage
      .getTitlesRow()
      .find(dropdown.LOCATORS.dropdownField)
      .should("be.visible");
  });

  it("Verify the 2 dropdown options", () => {
    cy.get(dropdown.LOCATORS.dropdownField)
      .select(optionOne)
      .should("have.value", firstValue);
    cy.get(dropdown.LOCATORS.dropdownField)
      .select(optionTwo)
      .should("have.value", secondValue);
  });

  it("Verify there are 3 dropdown options", () => {
    cy.get(dropdown.LOCATORS.dropdownField)
      .select(optionOne)
      .should("have.value", firstValue);
    cy.get(dropdown.LOCATORS.dropdownField)
      .select(optionTwo)
      .should("have.value", secondValue)
      .and("not.have.value", thirdValue);
  });
});
