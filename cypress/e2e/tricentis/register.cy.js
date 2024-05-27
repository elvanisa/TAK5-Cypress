import registerPage from "../../support/pageObject/tricentis/registerPage"

describe('Verify Register Functionality', () => {
  beforeEach(() => {
    cy.visit('/register')
  })
  it('Failed Regist - Min Pass Char', () => {
    cy.get(registerPage.gender).check()
    cy.get(registerPage.firstName).type('elvanisa')
    cy.get(registerPage.lastname).type('muhsina')
    cy.get(registerPage.email).type('elva@gmail.com')
    cy.get(registerPage.pass).type('123')
    cy.get(registerPage.confirm).type('123')
    cy.get(registerPage.errorMsg).should('contain.text','should have at least 6 characters')
  })
  it('Failed Regist - Unmatch Pass', () => {
    registerPage.chooseGender()
    registerPage.inputFirstName('elvanisa')
    registerPage.inputLastName('muhsina')
    registerPage.inputEmail('elva@gmail.com')
    cy.get('#Password').type('123456789')
    cy.get('#ConfirmPassword').type('987654321')
    cy.get('#register-button').click()
    registerPage.verifyText(registerPage.matchMsg,'password do not match')
  })
  it('Failed Regist - Email Invalid', () => {
    cy.get('#gender-male').check()
    cy.get('#FirstName').should('be.visible').type('elvanisa')
    cy.get('[name="LastName"]').should('be.visible').type('muhsina')
    cy.get('#Email').should('be.visible').type('elva')
    cy.get('#register-button').click()
    cy.get(':nth-child(4) > .field-validation-error > span').should('contain.text','Wrong email')
    cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','Password is required')
  })
  it('Failed Regist - Custom Command', () => {
    cy.get('#gender-male').check()
    cy.ketik('#FirstName','elvanisa')
    cy.ketik('[name="LastName"]','muhsina')
    cy.ketik('#Email','elva@mail.com')
    cy.get('#register-button').click()
    cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','Password is required')
  })
  it('Failed Regist - Fixtures', () => {
    cy.fixture('register').then((x) => {
      let regis = x
      cy.get('#gender-male').check()
      cy.ketik('#FirstName',regis.firstname)
      cy.ketik('[name="LastName"]',regis.lastname)
      cy.ketik('#Email',regis.email)
      cy.ketik(registerPage.pass,regis.pass)
      cy.ketik(registerPage.confirm,regis.confirmpassword) //kombinasi
      cy.get('#register-button').click()
      registerPage.verifyText(registerPage.summaryMsg,regis.existMessage)
    })
  })
})