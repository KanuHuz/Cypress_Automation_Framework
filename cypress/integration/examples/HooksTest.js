/// <reference types="Cypress" />

// Cypress.on('uncaught:exception', () => false) use to catch exceptions from ALL tests

describe("Hooks test case", function() {

    before(function () {
        // runs before every test block
        Cypress.on('uncaught:exception', () => false)
        // we load the fixture, store the info into data and then initialize it to make it available globally
        cy.fixture("example").then(function(data) {
            this.data = data
        })
    })

    it("Hooks test", function() {

        cy.visit(Cypress.env("url")+"/angularpractice")
        //cy.get(':nth-child(1) > .form-control').type("Kanu")
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should("have.value", this.data.name)
        cy.get(':nth-child(1) > .form-control').should("have.attr","minlength",2)
        cy.get('#inlineRadio3').should("be.disabled")
        // performing checkings on the shop. This can be assembled into a custom command
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('h4[class="card-title"]').each(($el, index, $list) => {

            if($el.text().includes("Blackberry")) {

                cy.get("button.btn.btn-info").eq(index).click()
            }
        })
           
    })
})


