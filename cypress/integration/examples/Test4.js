/// <reference types="Cypress" />

describe("My Fourth Cypress test", function() {

    it("Fourth test case", function() {

        // checkboxes
        cy.visit(Cypress.env("url")+"/AutomationPractice./node_modules\.bin\cypress run");
        cy.wait(500)
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //window:altert
        cy.on("window:alert",(String)=> {
            //mocha
            expect(String).to.equal("Hello , share this practice page and share your knowledge")
        })
        //window:confirm
        cy.on("window:confirm",(String)=> {
            //mocha
            expect(String).to.equal("Hello , Are you sure you want to confirm?")
        })
         // invoke is used to utilize a function, a JQuery method in this case (removeAttr)
        // removeAttr was used to force-open the page in the same windows
        cy.get('#opentab').invoke("removeAttr","target").click()
        cy.url().should("include","rahulshettyacademy")
        cy.go("back")

    })
})
