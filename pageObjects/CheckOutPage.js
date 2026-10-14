import { BasePage } from "./BasePage";
import { testdata } from "../test-data/testdata";

export class CheckOutPage extends BasePage{

constructor(page){
    super(page);
    // Customer information
    this.firstName =  page.getByPlaceholder('First Name')
    this.lastName =  page.getByPlaceholder('Last Name')
    this.zipCode =  page.getByPlaceholder('Zip/Postal Code')
    this.continueButton =  page.getByRole('button', {name: 'Continue'})

    this.total = page.locator('.summary_total_label')
    this.finishButton = page.locator('#finish')
    this.successMessage = page.getByText('Thank you for your order!');
}

async customerInformation(){
    await this.enterText(this.firstName, testdata.firstName);
    await this.enterText(this.lastName, testdata.lastName);
    await this.enterText(this.zipCode, testdata.zipcode);
}

async continue(){
    await this.scrollToView(this.continueButton);
    await this.clickElement(this.continueButton);
}

async getTotalAmount(){
    return await this.getText(this.total);
}

async finish(){
    await this.clickElement(this.finishButton);
}

}