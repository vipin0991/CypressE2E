///<reference types='cypress' />

export class LoginPage{

    webLocators = {
        email : "#input-email",
        password : "#input-password",
        login : "[value='Login']"

    }

    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }

    enterPassword(password){
        cy.get(this.webLocators.password).type(password)
    }

    clickLogin(){
        cy.get(this.webLocators.login).click()
    }


}