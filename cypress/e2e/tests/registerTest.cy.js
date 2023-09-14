///<reference types='cypress' />
import { RegisterPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData"

const registerObj = new RegisterPage

describe("Register Test",()=>{

    it("First Test",()=>{
        cy.visit(Cypress.env('URL'))

        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterBothPassword(registerData.password)
        registerObj.checkPolicy()
        registerObj.clickContinue()
    })
})