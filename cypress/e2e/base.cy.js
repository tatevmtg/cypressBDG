import { basePage } from "../Pages/Base";

describe('The internet dashboard', () => {   //test suit
  it('Verify clickable links in the page', () => {   //test case title
    cy.visit('https://the-internet.herokuapp.com');
    
    cy.get('ul').first()
    .find('a')
    .its('length')
    .should('eq',44);
  })
})