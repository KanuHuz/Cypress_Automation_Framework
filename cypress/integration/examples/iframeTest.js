/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"
// we need to download & import the cypress-iframe package

describe("Iframe test", function() {

    it("Demo on Iframe", function() {

        cy.visit(Cypress.env("url")+"/AutomationPractice")
        // here we load the iframe
        cy.frameLoaded("#courses-iframe")
        // then we active it with .iframe()
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)

    })
})