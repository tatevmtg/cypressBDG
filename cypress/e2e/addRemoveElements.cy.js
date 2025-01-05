import {addRemoveElements} from "../Pages/addRemoveElements";
import {basePage} from "../Pages/Base";


describe ('Add_Remove_Elements', () => {
  it ('Verify the existence of "Add/Remove Element" page', () => {
    cy.visit('/')
    cy.contains('Add/Remove Elements').click()
    cy.url().should('include', '/add_remove_elements/')
  })

  
  it ('Verify the button color', () => {
    cy.visit('/add_remove_elements/')
    cy.get(basePage.LOCATORS.content).should('contain',addRemoveElements.NAMES.contentText, 'have.css', 'background-color','#2ba6cb')
  })

  it ('Check "Add Element" button', () => {
    cy.visit('/add_remove_elements/')
    cy.get('.example').find('button').then((btn)=> {
        expect(btn).to.contain('Add Element')
  })
  })

  it ('Verify "Delete" button disappears after the page reload', () => {    
    cy.visit('/add_remove_elements/')
    cy.get('.example').find('button').then((btn)=> {
      expect(btn).to.contain('Add Element')
    cy.wrap(btn).click()
    cy.reload()
    cy.wrap(btn).should('not.exist')
  })
  })
  
  it ('Verify "Delete" button disappears when clicked', () => {    
    cy.visit('/add_remove_elements/')
    cy.contains('Add Element').click()
    cy.get('#elements').should('contain','Delete')
    cy.get('#elements .added-manually')
      .should('be.visible')
      .click()
      .should('not.exist');
    
  })

  it.only ('Click add element button 10times', () => {
    cy.visit('/add_remove_elements/')
    Cypress._.times(10, () => {
      cy.contains('Add Element').click({ force: true })
      cy.wait(400)
  })
    cy.get('.added-manually')
      .its('length')
      .should('eq', 10)
  })  


  })