/// <reference types="Cypress" />
// ../../ goes to super parent folder
import HomePage from "../../support/PageObjects/HomePage"
import ProductPage from "../../support/PageObjects/ProductPage"
// Cypress.on('uncaught:exception', () => false) use to catch exceptions from ALL test

describe("Hooks test case using POM", function() {

    before(function() {
        // runs before every test block
        Cypress.on('uncaught:exception', () => false)
        // we load the fixture, store the info into data and then initialize it to make it available globally
        cy.fixture("example").then(function(data) {
            this.data = data
        })
        cy.fixture("products").then(function(data1) {
            this.data1 = data1
        })
    })

    it("Hooks test with POM", function() {
    const homePage = new HomePage()
    const productPage = new ProductPage()
        cy.visit(Cypress.env("url")+"/angularpractice")
        //cy.get(':nth-child(1) > .form-control').type("Kanu")
        homePage.nameBox().type(this.data.name)
        homePage.gender().select(this.data.gender)
        homePage.twoWayDataBinding().should("have.value", this.data.name)
        homePage.nameBox().should("have.attr","minlength",2)
        homePage.entrepeneurButton().should("be.disabled")
        // paused is used to debug
        //cy.pause()

        // performing checkings on the shop. This can be assembled into a custom command
        
        cy.selectProduct("Blackberry")

        // using custom commands and iterating within an array
        this.data1.productName.forEach(function(element) {
            
            cy.selectProduct(element)
        })

        productPage.checkOutButton().click()
        var totalSum = 0

        cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {

            const amount = $el.text()
            var result = amount.split(" ")
            result = result[1].trim()
            cy.log(result)
            //totalSum = Number(totalSum)  + Number(result)
            totalSum = (+totalSum) + (+result)
        
        // this resolves the promise and allows to use the totalSum from outside the loop
        }).then(function() {
            cy.log("The total amount is " + totalSum)
        })

        cy.get('h3 > strong').then(function(element1) {
            const totalAmount = element1.text()
            var result1 = totalAmount.split(" ")
            result1 = result1[1].trim()
            expect(+result1).to.equal(+totalSum)
            cy.log("The total amount is correct! " + result1)
    
        })
        
        cy.contains("Checkout").click()
        cy.get("#country").type("Spain")
        //cy.wait(6000)
        // with this command we specify a timeout just for this spec file (overrides the default)
        Cypress.config('defaultCommandTimeout', 8000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox').click({force: true}) // forced interaction on overlapping elements
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should("have.text", "Success! Thank you! Your order will be delivered in next few weeks")
        cy.get('.alert').then(function(element) {

            const alertText = element.text()
            expect(alertText.includes("Success!")).to.be.true
        })
    })
})


