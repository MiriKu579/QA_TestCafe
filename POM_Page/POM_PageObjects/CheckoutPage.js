import { Selector, t } from 'testcafe'

import InventoryPage from '../POM_PageObjects/InventoryPage'
import LoginPage from  '../POM_PageObjects/LoginPage'
import ShoppingPage from '../POM_PageObjects/ShoppingCarPage'

class ShoppingPage{
    constructor (){
        this.firstName = Selector('input[id="first-name"]') 
        this.lastName = Selector('input[id="last-name"]')
        this.zipCode = Selector('input[id="postal-code"]')
        this.continueShoppingButton = Selector('input[id="postal-code"]')
        this.cancelButton = Selector('input[id="continue"]')
        this.continueButton = Selector('button[id="cancel"]') 
    }
}