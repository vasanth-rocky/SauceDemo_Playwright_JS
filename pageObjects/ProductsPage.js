import { BasePage } from "./BasePage";

export class ProductPage extends BasePage{

    constructor(page){
     super(page)
     this.items = this.page.locator('//button[@class="btn btn_primary btn_small btn_inventory "]');
     this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
     this.bikeligh = page.locator('#add-to-cart-sauce-labs-bike-light');
     this.boltshirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
     this.fleecejac = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
     this.onesie = page.locator('#add-to-cart-sauce-labs-onesie');
     this.redshirt = page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
     this.cartCount = page.locator('.shopping_cart_badge');
    }

async selectItems(){
   const itemcount = await this.items.count();
   console.log(itemcount)
   for(let i=0; i<itemcount; i++){
    await this.items.nth(i).click();
   }
}

   async addProducts(){
        await this.clickElement(this.backpack);
        await this.clickElement(this.bikeligh);
        await this.clickElement(this.boltshirt);
        await this.clickElement(this.fleecejac);
        await this.clickElement(this.onesie);
        await this.clickElement(this.redshirt);    
    }

    async getCartCount(){
        return await this.getText(this.cartCount);
    }
}