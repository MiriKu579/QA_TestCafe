import { Selector, t } from 'testcafe'

class InventoryPage{
    constructor (){
        this.header = Selector('span[class="title"]')
        this.shoppingCartIcon = Selector('#shopping_cart_container') // 'div[class="shopping_cart_container"']
        this.filter = Selector('select[class="product_sort_container"]')
        this.filter1 = Selector('option[value="az"]')
        this.filter2 = Selector('option[value="za"]')
        this.filter3 = Selector('option[value="hilo"]')
        this.filter4 = Selector('option[value="lohi"]')
        this.menuButton = Selector('button[id="react-burger-menu-btn"]')
        this.imageOK = Selector('img[src="/static/media/bike-light-1200x1500.a0c9caae.jpg"]')
        this.imageNotOk = Selector('img[src="/static/media/sl-404.168b1cce.jpg"]')
        this.nameOK = Selector('div[class="inventory_item_name"]')
        this.menu = Selector('nav[class"bm-item-list"]')
        this.logout = Selector('a[id="logout_sidebar_link"]')
        this.about = Selector('a[id="about_sidebar_link"]')
        this.about= Selector('a[class="bm-item menu-item"]')
        this.xButton = Selector('button[id="react-burger-cross-btn"]')
        this.bagPack = Selector('button[id="add-to-cart-sauce-labs-backpack"]') //Sauce Labs Backpack
        this.bikeLight = Selector('button[id="add-to-cart-sauce-labs-bike-light"]') //Sauce Labs Bike Light
        this.jacket = Selector('button[id="add-to-cart-sauce-labs-fleece-jacket"]') //Sauce Labs Fleece Jacket
        this.tshirt = Selector('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]') //Sauce Labs Bolt T-Shirt
        this.tshirtred = Selector('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]') //Test.allTheThings() T-Shirt (Red)
        this.babyshirt = Selector('button[id="add-to-cart-sauce-labs-onesie"]') //Sauce Labs Onesie
    }

    async inventoryPageValidation(){
        await t.expect(this.header.innerText).eql('PRODUCTS','Inventory Page is loaded and Products are showed')
        // sort products
        await t.expect(this.filter.exist).ok
        await t.click(this.filter)
        await t.click(this.filter3)
        // shopping Cart
        await t.expect(this.shoppingCartIcon.exist).ok
        // logout user
        await t.expect(this.menuButton.exist).ok
        await t.click(this.menuButton)
        await t.expect(this.menu.exist).ok
    }
}

export default new InventoryPage()

// h3[data-test="error"]
