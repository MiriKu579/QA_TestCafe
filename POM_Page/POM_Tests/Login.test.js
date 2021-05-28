
import {CREDENTIALS, MSGS, URLS} from '../POM_Data/Data'
import InventoryPage from '../POM_PageObjects/InventoryPage'
import LoginPage from  '../POM_PageObjects/LoginPage'
import ShoppingPage from '../POM_PageObjects/ShoppingCarPage'


fixture('Login feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t => {
        await LoginPage.loginPageValidation()})
// for debug use .only or .skip
    test('Login with a Valid user', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await InventoryPage.inventoryPageValidation()
        await t.click(InventoryPage.xButton)
    })

// problem_user => inventory is available but all the products are the same image
// performance_glitch_user => inventory is available and aparently, the products are corrects

fixture('Login feature test with an Invalid Users')
    .page(`${URLS.LOGIN_PAGE}`)
    test('Login with an invalid User', async t => { 
        await LoginPage.submitLoginForm(CREDENTIALS.NONVALID_USER.USERNAME, CREDENTIALS.NONVALID_USER.PASSWORD)
        await t.expect(InventoryPage.header.exist).notOk('done1')
        await t.expect(LoginPage.errorMessage.exist).ok
        await t.expect(LoginPage.errorMessage.innerText).eql(MSGS.ERROR_MESSAGES.NONVALID_USER.MESSAGE)
    })
    test('Login with a locked User', async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.LOCKED_USER.USERNAME, CREDENTIALS.LOCKED_USER.PASSWORD)
        await t.expect(InventoryPage.header.exist).notOk('done2')
        await t.expect(LoginPage.errorMessage.exist).ok
        await t.expect(LoginPage.errorMessage.innerText).eql(MSGS.ERROR_MESSAGES.LOCKED_USER.MESSAGE)
    })

fixture('Logout User (Performance User)')
    .page(`${URLS.LOGIN_PAGE}`) 
    test('Login with a Valid user and logout', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.PERFORMANCE_USER.USERNAME, CREDENTIALS.PERFORMANCE_USER.PASSWORD)
    await InventoryPage.inventoryPageValidation()
    await t.click(InventoryPage.logout)
    await LoginPage.loginPageValidation()
    })


    
    
    
