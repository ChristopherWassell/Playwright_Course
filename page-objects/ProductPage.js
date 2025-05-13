import { expect } from "@playwright/test"
import { Navigation } from "./Navigation.js"

export class ProductPage {
    constructor(page) {
        this.page = page 

        this.addButtons = page.locator('[data-qa="product-button"]')
        
    }

    visit = async () => {
        await this.page.goto("/")
    }


    addProductsToBasket = async (index) => {
       const specificAddButton = this.addButtons.nth(index)
       await specificAddButton.waitFor()
       await expect(specificAddButton).toHaveText("Add to Basket")
       const navigation = new Navigation(this.page)
       const basketCounteBeforeAdding = await navigation.getBasketCount()
       await specificAddButton.click()
       await expect(specificAddButton).toHaveText("Remove from Basket")
       const basketCounteAfterAdding = await navigation.getBasketCount()
       expect(basketCounteAfterAdding).toBeGreaterThan(basketCounteBeforeAdding)

    }
}