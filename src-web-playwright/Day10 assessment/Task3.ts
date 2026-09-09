//day - 10, task - 03:
import { chromium } from "playwright";
 
let browser = await chromium.launch({
    channel: "chrome",
    headless: false
});
 
let context = await browser.newContext();
let page = await context.newPage();
 
// 1. Navigate to Amazon India
await page.goto("https://www.amazon.in/");
 
// 2. Locate search box and enter laptop
await page.locator("#twotabsearchtextbox").fill("laptop");
 
// 3. Click Search
await page.locator("#nav-search-submit-button").click();
 
await page.waitForTimeout(3000);
 
// 4. Verify Search Results Page
let resultText = await page.locator("div.a-section.a-spacing-small span").first().textContent();
 
console.log("Search Result:");
console.log(resultText);
 
// 5. Get all product names on first page
let products = page.locator("h2 span");
 
let count = await products.count();
 
console.log("\nTotal Products Found:", count);
console.log("\nProduct Names:\n");
 
// 6. Iterate through products
for (let i = 0; i < count; i++) {
 
    let productName = await products.nth(i).textContent();
 
    if (productName) {
        console.log(productName);
 
        // 7. Check if product name contains laptop
        if (productName.toLowerCase().includes("laptop")) {
            console.log("Matching Product");
        } else {
            console.log("Non-Matching Product");
        }
 
        console.log("--------------------------------");
    }
}
 
await page.waitForTimeout(5000);
await browser.close();