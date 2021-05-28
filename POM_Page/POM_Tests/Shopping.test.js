import {CREDENTIALS, MSGS, URLS, ITEMS} from '../POM_Data/Data'
import InventoryPage from '../POM_PageObjects/InventoryPage'
import LoginPage from  '../POM_PageObjects/LoginPage'
import ShoppingPage from '../POM_PageObjects/ShoppingCarPage'

fixture('Shopping car ')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t => {
        await LoginPage.loginPageValidation()
        await LoginPage.submitLoginForm(CREDENTIALS.PERFORMANCE_USER.USERNAME, CREDENTIALS.PERFORMANCE_USER.PASSWORD)
    })
// for debug use .only or .skip
    test('Shopping Car Navigation', async t => {
        await ShoppingPage.shoppingCarPageValidation()
        await t.click(ShoppingPage.continueShoppingButton)
        await InventoryPage.inventoryPageValidation()
    })
    test('Shopping one item', async t=>{
        await t.click(InventoryPage.tshirt)
        await t.click(InventoryPage.shoppingCartIcon)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.TSHIRT.ITEM_NAME)
        await t.expect(ShoppingPage.itemDescription.innerText).contains(ITEMS.TSHIRT.ITEM_DESCRIPTION)

    })
    test.only('Shopping multiple item', async t=>{
        // await ShoppingPage.addItem() WIP
        await t.click(InventoryPage.tshirt)
        await t.click(InventoryPage.babyshirt)
        await t.click(InventoryPage.bagPack)
        await t.click(InventoryPage.tshirtred)
        await t.click(InventoryPage.jacket)
        await t.click(InventoryPage.bikeLight)
        await t.click(InventoryPage.shoppingCartIcon)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.TSHIRT.ITEM_NAME)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.TSHIRT.ITEM_DESCRIPTION)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.BABYSHIRT.ITEM_NAME)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.BABYSHIRT.ITEM_DESCRIPTION)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.BAGPACK.ITEM_NAME)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.BAGPACK.ITEM_DESCRIPTION)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.TSHIRT_RED.ITEM_NAME)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.TSHIRT_RED.ITEM_DESCRIPTION)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.JACKET.ITEM_NAME)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.JACKET.ITEM_DESCRIPTION)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.BIKELIGHT.ITEM_NAME)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.BIKELIGHT.ITEM_DESCRIPTION)
    })
    test('Missing Mail Information', async t=>{
        await t.click(InventoryPage.tshirt)
        await t.click(InventoryPage.shoppingCartIcon)
        await t.expect(ShoppingPage.item.innerText).contains(ITEMS.TSHIRT.ITEM_NAME)
        await t.expect(ShoppingPage.itemDescription.innerText).contains(ITEMS.TSHIRT.ITEM_DESCRIPTION)

    })