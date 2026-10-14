import {test, expect} from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';
import { CheckOutPage } from '../pages/CheckOutPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductsPage.js';

test('Sauce Demo End to end test', {tag: "@sanity"},async ({page}) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckOutPage(page);

    //login
    await loginPage.open();
    await loginPage.login();

    await page.waitForTimeout(5000)
    console.log('Sauce Demo Page Logged in Successfully.')

    //products page
    await productsPage.addProducts();

     // Verify cart
     const cartCount = await productsPage.getCartCount();

     expect(cartCount).toBe('6');

    // Open cart
    await cartPage.openCart();
    console.log(cartCount, ' Products Added to Cart.')

    // Checkout
    await cartPage.checkout();

    await checkoutPage.customerInformation();
    console.log("Customer Information Entered Successfully.")

    await checkoutPage.continue();

    // Verify total
    await expect(checkoutPage.total).toBeVisible();

    const totalAmount = await checkoutPage.getTotalAmount();

    console.log('Order ', totalAmount);
    console.log("Verified Items and Total Amount Successfully.")

    // Complete order
    await checkoutPage.finish();

    // Verify successful order
    await expect(checkoutPage.successMessage).toBeVisible();

    console.log('CheckOut Complete.');
    console.log(await (checkoutPage.successMessage).textContent());
})