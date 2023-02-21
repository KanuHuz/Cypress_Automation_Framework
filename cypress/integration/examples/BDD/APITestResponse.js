/// <reference types="Cypress" />

describe("API response test", function() {


    it("Second API test", function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/"),

        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        (req) => {

            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res) => {

                expect(res.statusCode).to.equal(200)
            })
        }).as("dummyUrl")

        cy.get("button[class='btn btn-primary']").click()
        cy.wait("@dummyUrl")

    })
})