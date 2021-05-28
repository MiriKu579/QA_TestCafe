import { Selector, t } from 'testcafe'

class LoginPage{
    constructor (){
        this.loginLogo = Selector('#login_logo') //css type1
        this.logingCredentials = Selector('#login_credentials')
        this.loginPasswords = Selector('div[class="login_password"]')
        this.loginButton = Selector('#login-button')
        this.userfield = Selector('input[id="user-name"') //css type2
        this.passfield = Selector('input[placeholder="Password"]') //css type3
        this.errorMessage = Selector('h3[data-test="error"]')

    }

    async submitLoginForm(username, password){
        await t.typeText(this.userfield, username, {paste: true})
        await t.typeText(this.passfield, password, {paste: true})
        await t.click(this.loginButton)
    }

    async clickLoginButton(){
        await t.click(this.loginButton)
    }

    async loginPageValidation(){
        await t.expect(this.loginLogo.exist).ok
        await t.expect(this.logingCredentials.exist).ok
        await t.expect(this.logingCredentials.innerText).contains('Accepted usernames are:')
        await t.expect(this.loginPasswords.exist).ok
        await t.expect(this.loginPasswords.innerText).contains('Password for all users:')
    }
}

export default new LoginPage()


