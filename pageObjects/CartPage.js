import { BasePage } from "./BasePage";

export class CartPage extends BasePage{

    constructor(page){
        super(page)
        this.cartbutton = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('#checkout');
    }

    async openCart(){
        await this.clickElement(this.cartbutton);
    }

    async checkout() {
        await this.scrollToView(this.checkoutButton); 
        await this.clickElement(this.checkoutButton); 
    }
}