import { brokenImages } from "../Pages/addRemoveElements";
import { basePage } from "../Pages/Base";

describe ('Broken_Images', () => {
    it ('Verify the existence of Broken Images page', () => {
        cy.visit ('/')
        cy.contains('Broken Images').click()
        cy.url().should('include', 'broken_images')
    })

    it.only ('Verify existence of images on the page', () => {
        cy.visit ('/broken_images/')

    })
// test case img size 120*90
})