class registerPage{
    gender = '#gender-male'
    firstName = '#FirstName'
    lastname = '[name="LastName"]'
    email = '#Email'
    pass = '#Password'
    confirm = '#ConfirmPassword'
    errorMsg = ':nth-child(1) > .field-validation-error > span'

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
    verifyText(text){
        cy.get(this.errorMsg).should('contain.text',text)
    }
}
export default new registerPage()