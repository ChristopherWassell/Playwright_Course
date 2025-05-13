import {test} from "@playwright/test"
import { ProductPage } from "../page-objects/ProductPage.js"
import { Navigation } from "../page-objects/Navigation.js"
import {Checkout} from "./../page-objects/Checkout.js"

test.only("New user full end-to-end test journey", async ({ page }) => {
    const productPage = new ProductPage(page) 
    await productPage.visit()
    await productPage.addProductsToBasket (0)
    await productPage.addProductsToBasket (1)
    await productPage.addProductsToBasket (2)
    const navigation = new Navigation(page)
    await navigation.goToCheckout()

    const checkout = new Checkout(page)
    await checkout.removeCheapestProduct()

    
})
