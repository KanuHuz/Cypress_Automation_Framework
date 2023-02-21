/// <reference types="Cypress" />

describe("My Fifth Cypress test", function() {

    it("Fifth test case", function() {

        cy.visit(Cypress.env("url")+"/AutomationPractice");
        // this selector has to be built manually, then we do an iteration
        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
           
           const text = $el.text()
           if(text.includes("Python")) {
                // text() cannot be handled because it doesn't resolve Js promise so we use then()
                // we pass index to eq because index stores the value of the iteration process
                // next() gets the sibling element
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(Price) {

                   const priceText = Price.text()
                   expect(priceText).to.equal("25")
                
            })
           }
        })
    })
})
