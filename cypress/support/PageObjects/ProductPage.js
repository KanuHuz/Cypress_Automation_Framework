/// <reference types="Cypress" />

class ProductPage {

    addToCartButton() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    checkOutButton() {
        return cy.get("a[class='nav-link btn btn-primary']")
    }
}

export default ProductPage;