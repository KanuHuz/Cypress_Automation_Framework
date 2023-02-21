/// <reference types="Cypress" />

describe("My Sixth Cypress test", function() {

    it("Sixth test case", function() {

        cy.visit(Cypress.env("url")+"/AutomationPractice")
        // there is no direct support of mouse hover in Cypress so we use show jQuery method
        // we locate the parent and use. to get the class
        cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click()
        // cy.contains("Top").click({force :true}) ---> this forces elements to appear. Selenium can't to that
        cy.url().should("include","top")

    })
})
