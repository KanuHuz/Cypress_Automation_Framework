/// <reference types="Cypress" />
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../../support/PageObjects/HomePage"
import ProductPage from "../../../../support/PageObjects/ProductPage"
// npx cypress run --spec cypress\integration\examples\BDD\.*feature --headed --browser chrome
// add cucumber report options in package.json --→ output.json
// use html report plugin/create .js file (pass the details of output.json)
// run .js file

const homePage = new HomePage()
const productPage = new ProductPage()


        Given("I open E-commerce page", function() {

            cy.visit(Cypress.env("url")+"/angularpractice")

        })

        When("I add items to the cart", function() {

            homePage.addToCartButton().click()
            cy.selectProduct("Blackberry")
        // using custom commands and iterating within an array
            this.data1.productName.forEach(function(element) {
            
            cy.selectProduct(element)
        }),

            productPage.checkOutButton().click()

        })

        And ("Validate the total price", function() {
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
        })


        Then ("I select the country, submit and verify ThankYou message", function() {

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

        // When I fill the form details
        When("I fill the form details", function(dataTable) {
            
            // we use dataTable to use the data from cucumber, then rawTable
            // [[gender,name],[Kanu, male]]
            homePage.nameBox().type(dataTable.rawTable[1][0])
            homePage.gender().select(dataTable.rawTable[1][1])

        })
        // Then Validate the forms behavior 
        Then("Validate the forms behavior", function() {

            homePage.twoWayDataBinding().should("have.value", this.data.name)
            homePage.nameBox().should("have.attr","minlength",2)
            homePage.entrepeneurButton().should("be.disabled")
        })
        // And I select the shop page
        And("I select the shop page", function() {

            homePage.addToCartButton().click()
           
        })