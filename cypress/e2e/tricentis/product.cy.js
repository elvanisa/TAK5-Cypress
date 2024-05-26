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
      cy.get('#small-searchterm').type(Cypress.env('product1'))
      cy.get('form > .button-1').click()
      cy.url().should('include',Cypress.env('product1'))
    })
    it('Search Feature 2', () => {
      cy.get('#small-searchterms').type(Cypress.env('product2'))
      cy.get('form > .button-1').click()
      cy.url().should('include',Cypress.env('product2'))
  })
  })