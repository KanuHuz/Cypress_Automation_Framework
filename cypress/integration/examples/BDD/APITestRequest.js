/// <reference types="Cypress" />

describe("API request test", function() {


    it("First API test", function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo")

        cy.intercept({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },

        { 
            statusCode: 200,
            body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301" 
                  }]
      
    // we store the promise generated above in bookRetrievals variable
    }).as("bookRetrievals")
    cy.get("button[class='btn btn-primary']").click()
    cy.wait("@bookRetrievals").should(({request,response}) => {

        cy.get("tr").should("have.length",response.body.length+1)

    })
    cy.get("p").should("have.text", "Oops only 1 Book available")

    // To validate proper API response (Integration Testing)
    // length of the response array = # of rows on the table


    })

})