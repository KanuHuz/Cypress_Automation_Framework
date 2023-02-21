/// <reference types="Cypress" />
/// the line above activates IntelliSense on a per file basis

describe("My first Cypress test", function() {

    it("First test case", function() {

        cy.visit(Cypress.env("url")+"/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        console.log("Initializing the testing script")

        
        // the :visible is a jQuery selector to only show visible results
        // jQuery selectors == CSS3 selectors but jQuery has more of them
        cy.get(".product:visible").should("have.have.length", 4)

        // parent-child chaining 
        cy.get(".products").as("productLocator")
        cy.get("@productLocator").find(".product").should("have.length",4)

        // clicking on the element
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click().then(function() {
            console.log("Item was successfully added to cart!") 
        })

        cy.get("@productLocator").find(".product").each(($el, index, $list) => {
        
            const testVeggies = $el.find("h4.product-name").text()
                if (testVeggies.includes("Cashews")) {
                    cy.wrap($el).find("button").click()
                }
        })

        // assert if logotext is correctly displayed/matches
        cy.get(".brand").should("have.text","GREENKART")

        cy.get('.brand').then(function(logoMarket) {
            // this is done to grab & print the text inside logoMarket. text is jQuery method
            cy.log(logoMarket.text())

        })
    })
})