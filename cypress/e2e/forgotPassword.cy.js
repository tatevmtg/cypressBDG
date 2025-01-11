describe ('Forgot Password', () => {
    before(() => {
        cy.visit('/')
      })

    it ('Verify the existence of Forgot password page', () => {
        cy.contains('Forgot Password').click()
        cy.url().should('include', 'forgot_password');
        cy.get('.row').should('include', 'E-mail')
        cy.get('email').should('be.empty')
        cy.get('#form_submit').should('have.css', 'color', '#2BA6CB', 'text', 'italic')
    })

    

})