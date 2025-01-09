describe ('Dropdown', () => {
    it ('Verify the existence of Dropdown page', () => {
        cy.visit ('/')
        cy.contains('Dropdown').click()
        cy.url().should('include', 'dropdown')
    })

    it ('Verify the dropdown menu on the page', () => {
        cy.visit ('/dropdown')
        cy.get('.example')
        .find('#dropdown')
        .should('be.visible')
    })

    it.only ('Verify the 2 dropdown options', () => {
        cy.visit ('/dropdown')
        cy.get('#dropdown').select('Option 1')
        .should('have.value', '1')
        cy.get('#dropdown').select('Option 2')
        .should('have.value', '2')
    })
    
    it.only ('Verify there are 3 dropdown options', () => {
        cy.visit ('/dropdown')
        cy.get('#dropdown').select('Option 1')
        .should('have.value', '1')
        cy.get('#dropdown').select('Option 2')
        .should('have.value', '2')
        cy.get('#dropdown').select('Option 3')
        .should('have.value', '3')
    })

})