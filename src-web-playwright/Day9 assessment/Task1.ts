import { chromium } from "playwright";
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context=await browser.newContext()
let page=await context.newPage()
 
//navigate to URL

await page.goto("https://www.online.citibank.co.in/")
 
//Accept cookies
await page.locator("xpath=//button[@id='onetrust-accept-btn-handler']").click();
 
await page.locator("xpath=//div[text()='My Account']").hover();
const [newPage]=await Promise.all([context.waitForEvent("page"), page.locator("xpath=//div[text()='Banking with Citi']").click()])
 
//await newPage.waitForLoadState();
 
//console.log(await newPage.title());
 
await newPage.locator("xpath=//input[@id='username']").fill("john123");
await newPage.locator("xpath=//button[@id='signInBtn']").click();
 
let errorMsg = await newPage.locator("xpath=//span[@role='alert']").innerText();
console.log("Password Error:", errorMsg);


await page.waitForTimeout(2000);
await browser.close()




