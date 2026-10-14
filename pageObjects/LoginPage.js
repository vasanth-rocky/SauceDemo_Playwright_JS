import { BasePage } from "./BasePage";
import { testdata } from "../test-data/testdata";

export class LoginPage extends BasePage{

    constructor(page){
        super(page);
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

    async login(){
        await this.enterText(this.username, testdata.standard_username);
        await this.enterText(this.password, testdata.common_password);
        await this.clickElement(this.loginButton);
    }

}