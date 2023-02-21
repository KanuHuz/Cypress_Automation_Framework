/// <reference types="Cypress" />

describe("My Third Cypress test", function() {

    it("Third test case", function() {

        // checkboxes
        cy.visit(Cypress.env("url")+"/AutomationPractice");
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        // the input type should have ' or " be empty
        cy.get("input[type='checkbox']").as("allCheckBoxes").check(["option2","option3"])

        // static dropdowns
        cy.get("select").select("option2").should("have.value","option2")
        
        // dynamic dropdowns
        cy.get('#autocomplete').type("arg")
        cy.get(".ui-menu-item").each(($el, index, $list) => {

            if($el.text() === "Argentina") {
                cy.wrap($el).click()
            }
        // autocomplete
        cy.get('#autocomplete').should("have.value","Argentina")

        // visible/invisible
        cy.get('#displayed-text').should("be.visible")
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should("not.be.visible")
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should("be.visible")

        // radio buttons
        cy.get('[value="radio3"]').check().should("be.visible")

        })
    })
})
