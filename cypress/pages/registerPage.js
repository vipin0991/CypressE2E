///<reference types='cypress' />

export class RegisterPage{

    webLocators = {
        firstname : "#input-firstname",
        lastname : "#input-lastname",
        email : "#input-email",
        telephone : "#input-telephone",
        password : "#input-password",
        cpassword : "#input-confirm",
        policy : "[name='agree']",
        continue : ".btn.btn-primary"

    }

    enterFirstName(fName){
        cy.get(this.webLocators.firstname).type(fName)
    }

    enterLastName(lName){
        cy.get(this.webLocators.lastname).type(lName)
    }

    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }

    enterTelephone(telephone){
        cy.get(this.webLocators.telephone).type(telephone)
    }

    enterBothPassword(password){
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.cpassword).type(password)
    }

    checkPolicy(){
        cy.get(this.webLocators.policy).click()
    }

    clickContinue(){
        cy.get(this.webLocators.continue).click()
    }


}