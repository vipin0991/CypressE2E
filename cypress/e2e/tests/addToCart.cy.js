import { HomePage } from "../../pages/homePage";
const homePageObj = new HomePage()
import testData from "../../fixtures/testData"

describe("addtoCart Test",()=>{

    //You can create separate test data file for each page is data is huge

    before(()=>{
        cy.login(testData.login.uname, testData.login.password)
    })

    it("Add to Cart", ()=>{
        homePageObj.searchProduct(testData.products.product)
        homePageObj.addToCart()
        //Use of assertion in test script
        //homePageObj.verifySuccessMessage().should('contain', testData.message).and('contain', testData.product)
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage)
    })

})