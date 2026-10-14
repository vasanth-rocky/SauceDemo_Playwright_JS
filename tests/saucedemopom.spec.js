import { test, expect } from '@playwright/test';
import { testdata } from '../test-data/testdata';
import { BasePage } from '../pageObjects/BasePage';
import { LoginPage } from '../pageObjects/LoginPage';
import { ProductPage } from '../pageObjects/ProductsPage';
import { CartPage } from '../pageObjects/CartPage';
import { CheckOutPage } from '../pageObjects/CheckOutPage';

test('Sauce Demo End to End Test', async ({ page }) => {
  
//create objects for class pages 
const base = new BasePage(page);
const loginPage = new LoginPage(page);
const productsPage = new ProductPage(page);
const cartsPage = new CartPage(page);
const checkoutPage = new CheckOutPage(page);

//step 1:
  await test.step('Open URL', async() => {
  await base.navigate('/');
})

//step 2:
await test.step('Signin with standard user', async() => {
  await loginPage.login();
  expect(page.url()).toBe(testdata.inventoryUrl);
})

//step 3:
await test.step('Select products', async() => {
  // await productsPage.selectItems();
  await productsPage.addProducts();
})

//step 4:
await test.step('Click on Cart icon', async() => {
  await cartsPage.openCart();
  expect(page.url()).toBe(testdata.cartUrl);
})

//step 5:
await test.step('Click on Checkout button', async() => {
  await cartsPage.checkout();
  expect(page.url()).toBe(testdata.checkOutUrl);
})

//step 6:
await test.step('Enter Checkout - Customer Information', async() => {
  await checkoutPage.customerInformation();
  await checkoutPage.continue();
  expect(page.url()).toBe(testdata.checkOut2Url);
  
})

//step 7:
await test.step('Validate total price of all products and Finish', async() => {
  await checkoutPage.getTotalAmount();
  await checkoutPage.finish();
  expect(page.url()).toBe(testdata.checkoutComplete);
  await page.pause();
})

});
