/// <reference types="Cypress" />

beforeEach(function() {
    // runs before every test block
    cy.fixture("example").then(function(data) {
        this.data = data
    })
    cy.fixture("products").then(function(data1) {
        this.data1 = data1
    })
})