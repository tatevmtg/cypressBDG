import { find } from "lodash";
import { brokenImages } from "../Pages/addRemoveElements";
import { basePage } from "../Pages/Base";

describe ('Broken_Images', () => {
    it ('Verify the existence of Broken Images page', () => {
        cy.visit ('/')
        cy.contains('Broken Images').click()
        cy.url().should('include', 'broken_images')
    })

    it ('Verify existence of images on the page', () => {
        cy.visit ('/broken_images')
        cy.get('.example')
        .find('img')
        .should('be.visible')
    })

    it ('Verify image width', () => {
        cy.visit ('/broken_images')
        cy.get('.example')
        .find('img')
        .should('have.css', 'width', '120px')
        .should('have.css', 'height', '90px')
    })

    it.only ('Verify broken images on the page', () => {
        cy.visit ('/broken_images')
        cy.get('.example')
        .find('img')
        .should('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    })
})