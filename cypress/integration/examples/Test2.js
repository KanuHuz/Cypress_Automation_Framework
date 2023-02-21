/// <reference types="Cypress" />

describe("My first Cypress test", function() {

    it("First test case", function() {

        cy.visit(Cypress.env("url")+"/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        console.log("Initializing the testing script")

        // parent-child chaining 
        cy.get(".products").as("productLocator")
        cy.get("@productLocator").find(".product").each(($el, index, $list) => {
        
            const testVeggies = $el.find("h4.product-name").text()
                if (testVeggies.includes("Cashews")) {
                    cy.wrap($el).find("button").click()
                }
        })
        cy.get('.cart-icon > img').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()

    })
})