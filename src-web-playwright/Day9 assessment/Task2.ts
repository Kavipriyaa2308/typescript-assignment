import { chromium } from "playwright";
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context=await browser.newContext()
let page=await context.newPage()
 
//navigate to URL
await page.goto("https://secure1.inmotionhosting.com/index/login")
let promisePage = page.waitForEvent("popup")
await page.locator("xpath=//span[normalise-space()=' Visit Our Support Center']").click();

const newPage=await promisePage;
await newPage.locator("xpath=//button[text()='No Thanks']").click();
await newPage.locator("xpath=//input[@type='search']").fill("diskspace");
await newPage.locator("xpath=//button[@type='submit']").click();

const result=await page.locator("xpath=//h1[contains(text(),'Search Results for: diskspace']").innerText();
console.log(result);


await newPage.waitForTimeout(2000);
await page.waitForTimeout(2000);
await browser.close()

