class registerPage{
    gender = '#gender-male'
    firstName = '#FirstName'
    lastname = '[name="LastName"]'
    email = '#Email'
    pass = '#Password'
    confirm = '#ConfirmPassword'
    errorMsg = ':nth-child(1) > .field-validation-error > span'
    matchMsg = '.field-validation-error > span'
    summaryMsg = '.validation-summary-errors > ul > li'

    chooseGender(){
        cy.get(this.gender).check()
    }

    inputFirstName(value){
        cy.get(this.firstName).should('be.visible').type(value)
    }
    inputLastName(value){
        cy.get(this.lastname).should('be.visible').type(value)
    }
    inputEmail(value){
        cy.get(this.email).should('be.visible').type(value)
    }
    verifyText(msg,text){
        cy.get(msg).should('contain.text',text)
    }
}
export default new registerPage()