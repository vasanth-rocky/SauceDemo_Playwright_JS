# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemopom.spec.js >> Sauce Demo End to End Test
- Location: tests\saucedemopom.spec.js:9:5

# Error details

```
ReferenceError: locator is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 6 items" [ref=e13]:
          - generic [ref=e14]: "6"
      - generic [ref=e15]: "Checkout: Overview"
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: QTY
          - generic [ref=e21]: Description
          - generic [ref=e22]:
            - generic [ref=e23]: "1"
            - generic [ref=e24]:
              - button "View details for Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
                - generic [ref=e26]: Sauce Labs Backpack
              - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
              - generic [ref=e28]: $29.99
          - generic [ref=e30]:
            - generic [ref=e31]: "1"
            - generic [ref=e32]:
              - button "View details for Sauce Labs Bike Light" [ref=e33] [cursor=pointer]:
                - generic [ref=e34]: Sauce Labs Bike Light
              - generic [ref=e35]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
              - generic [ref=e36]: $9.99
          - generic [ref=e38]:
            - generic [ref=e39]: "1"
            - generic [ref=e40]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e41] [cursor=pointer]:
                - generic [ref=e42]: Sauce Labs Bolt T-Shirt
              - generic [ref=e43]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
              - generic [ref=e44]: $15.99
          - generic [ref=e46]:
            - generic [ref=e47]: "1"
            - generic [ref=e48]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e49] [cursor=pointer]:
                - generic [ref=e50]: Sauce Labs Fleece Jacket
              - generic [ref=e51]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
              - generic [ref=e52]: $49.99
          - generic [ref=e54]:
            - generic [ref=e55]: "1"
            - generic [ref=e56]:
              - button "View details for Sauce Labs Onesie" [ref=e57] [cursor=pointer]:
                - generic [ref=e58]: Sauce Labs Onesie
              - generic [ref=e59]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
              - generic [ref=e60]: $7.99
          - generic [ref=e62]:
            - generic [ref=e63]: "1"
            - generic [ref=e64]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e65] [cursor=pointer]:
                - generic [ref=e66]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e67]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
              - generic [ref=e68]: $15.99
        - generic [ref=e70]:
          - generic [ref=e71]: "Payment Information:"
          - generic [ref=e72]: "SauceCard #31337"
          - generic [ref=e73]: "Shipping Information:"
          - generic [ref=e74]: Free Pony Express Delivery!
          - generic [ref=e75]: Price Total
          - generic [ref=e76]: "Item total: $129.94"
          - generic [ref=e77]: "Tax: $10.40"
          - generic [ref=e78]: "Total: $140.34"
          - generic [ref=e79]:
            - button "Cancel" [ref=e80] [cursor=pointer]
            - button "Finish" [ref=e81] [cursor=pointer]
  - contentinfo [ref=e82]:
    - list [ref=e83]:
      - listitem [ref=e84]:
        - link "X" [ref=e85] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e86]:
        - link "Facebook" [ref=e87] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e88]:
        - link "LinkedIn" [ref=e89] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e90]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | export class BasePage{
  2  | 
  3  |     constructor(page){
  4  |         this.page = page;
  5  |     }
  6  | 
  7  |     async navigate(url){
  8  |         await this.page.goto(url, {waituntil: 'domcontentloaded', timeout: 60000});
  9  |     }
  10 | 
  11 |     async clickElement(locator){
  12 |         await locator.click();
  13 |     }
  14 | 
  15 | 	 async clickFirstElement(locator){
  16 |         await locator.first().click();
  17 |     }
  18 | 
  19 |     async enterText(locator, value){
  20 |         await locator.fill(value)
  21 |     }
  22 | 
  23 |     async enterFirstText(locator, value){
  24 |         await locator.first().fill(value)
  25 |     }
  26 | 
  27 |     async getText(){
> 28 |         return await locator.textContent()
     |         ^ ReferenceError: locator is not defined
  29 |     }
  30 | 
  31 |     async isVisible(locator){
  32 |         return await locator.isVisible()
  33 |     }
  34 | 
  35 |     async waitForLoad(page){
  36 |         await page.waitForLoadState('domcontentloaded');
  37 |     }
  38 | 
  39 |     async scrollToView(locator){
  40 |         await locator.scrollIntoViewIfNeeded();
  41 |     }
  42 | 
  43 | }
```