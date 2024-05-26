import productPage from "../../support/pageObject/tricentis/productPage"

describe('Verify Register Functionality', () => {
    beforeEach(() => {
      cy.visit('')
      cy.title().should('include', 'Demo Web Shop')
    })
    afterEach(() => {
      cy.title().should('include', 'Demo Web Shop. Search')
    })
    it('Search Feature 1', () => {
      //const product = 'computer'
      cy.get(productPage.searchField).type(Cypress.env('product1'))
      cy.get(productPage.searchBtn).click()
      cy.url().should('include',Cypress.env('product1'))
    })
    it('Search Feature 2', () => {
      cy.get(productPage.searchField).type(Cypress.env('product2'))
      cy.get(productPage.searchBtn).click()
      cy.url().should('include',Cypress.env('product2'))
    })
    it('Search Feature Custom Command', () => {
      cy.cariBarang(Cypress.env('product3'))
      cy.cariBarang(Cypress.env('product2'))
      cy.cariBarang(Cypress.env('product1'))
    })
  })