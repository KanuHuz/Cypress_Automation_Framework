/// <reference types="Cypress" />

describe("My Seventh Cypress test", function() {

    it("Seventh test case", function() {

        cy.visit(Cypress.env("url")+"/AutomationPractice/")
        // we can't concatenate cypress method with non cypress method, we have to use then to resolve the promise
        cy.get("#opentab").then(function(el) {
        
            const url = el.prop("href")
            cy.log(url)
            cy.visit(url)
        // different domains will throw an error, you can visit any page BUT within the same domain

        })
    })
})