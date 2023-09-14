///<reference types='cypress' />

export class HomePage{

    webLocators = {
        search_input : ".form-control.input-lg",
        click_search : ".fa.fa-search",
        product : "[title='MacBook']",
        addToCart : "Add to Cart",
        successMessages : "div.alert.alert-success.alert-dismissible"

    }

    searchProduct(productName){
        cy.get(this.webLocators.search_input).type(productName)
        cy.get(this.webLocators.click_search).click()
    }

    addToCart(){
        cy.contains(this.webLocators.addToCart).first().click()
    }

    verifySuccessMessage(){
        return cy.get(this.webLocators.successMessages)
    }

}