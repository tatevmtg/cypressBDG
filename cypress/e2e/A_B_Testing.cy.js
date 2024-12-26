import { abTesting } from "../Pages/A_B_Testing";
import { basePage } from "../Pages/Base";

describe('A_B_Testing', () => {   //test suit
  it('Verify content in the page', () => {   //test case title
    cy.visit('https://the-internet.herokuapp.com');
    cy.contains('A/B Testing').click();
    cy.get(basePage.LOCATORS.content).should('contain', abTesting.NAMES.contentText)
  })
})