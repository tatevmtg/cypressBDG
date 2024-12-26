import { addRemoveElements } from "../Pages/addRemoveElements";
import {basePage} from "../Pages/Base";


describe('Add_Remove_Elements', () => {
  it('Verify the functionality of Add/Remove button', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.contains('Add/Remove Elements').click();
    cy.url().should('include', '/add_remove_elements/');
    cy.get(basePage.LOCATORS.content).should('contain',addRemoveElements.NAMES.contentText, 'have.css', 'background-color','#2ba6cb'); //TestCase 1: check button color blue
    
    cy.get('.example').find('button').then((btn)=>{ //TestCase2: check add element button
        expect(btn).to.contain('Add Element');
        cy.wrap(btn).click()
        cy.reload() //TestCase3: "Remove" button disappears after the page reload
        cy.wrap(btn).should('not.exist')
    
    cy.get('.example').find('button').then((btn)=>{
        expect(btn).to.contain('Add Element');
        cy.wrap(btn).click()
    cy.get('#elements').find('button').then((btn)=> { //TestCase4: check remove button
        expect(btn).to.contain('Delete');
        cy.wrap(btn).click().should('not.exist');
        
    Cypress._.times(10, () => cy.get('.example').find('button').click({multiple: true})) //TestCase5: click add element button 10times


    })
    })
    
    })
    
  })
})