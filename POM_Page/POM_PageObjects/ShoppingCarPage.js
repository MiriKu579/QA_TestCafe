import { Selector, t } from 'testcafe'
import InventoryPage from '../POM_PageObjects/InventoryPage'
import LoginPage from  '../POM_PageObjects/LoginPage'

class ShoppingPage{
    constructor (){
        this.shoppingLogo = Selector('#app_logo') 
        this.shoppingCartButton = Selector('#shopping_cart_container')
        this.checkoutButton = Selector('#checkout')
        this.continueShoppingButton = Selector('#continue-shopping')
        this.shoppingheader = Selector('span[class="title"]')  //Your Cart
        this.qty = Selector('#cart_quantity_label') 
        this.description = Selector('#cart_desc_label')
        this.item = Selector('div[class="inventory_item_name"]')
        this.itemDescription = Selector('div[class="inventory_item_desc"]') //div[class="inventory_item_desc"]
    }

    async shoppingCarPageValidation(){
        // await t.click(this.shoppingIcon)
        await t.click(InventoryPage.shoppingCartIcon)
        await t.expect(this.shoppingLogo.exist).ok
        await t.expect(this.shoppingheader.exist).ok
        await t.expect(this.checkoutButton.exist).ok
        await t.expect(this.continueShoppingButton.exist).ok
        await t.expect(this.qty.exist).ok
        await t.expect(this.description.exist).ok
    }

    // async addItem(item){
    //     await t.click(this.bikeLight)
    //     await t.click(this.shoppingCartIcon)
    //     await t.expect(this.item.innerText).contains(ITEMS.BIKELIGHT.ITEM_NAME)
    //     await t.expect(this.itemDescription.innerText).contains(ITEMS.BIKELIGHT.ITEM_DESCRIPTION)
    // }
}

export default new ShoppingPage()