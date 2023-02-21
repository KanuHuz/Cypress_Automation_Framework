/// <reference types="Cypress" />

class HomePage {

    nameBox() {
        return cy.get("input[name='name']:nth-child(2)")
    }

    twoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    gender() {
        return cy.get('#exampleFormControlSelect1')
    }

    entrepeneurButton() {
        return cy.get('#inlineRadio3')
    }

    addToCartButton() {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

// The return statement ends function execution and specifies a value to be returned to the function caller
// this makes the class exportable
export default HomePage;