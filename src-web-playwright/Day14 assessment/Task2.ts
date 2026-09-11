import { chromium } from "playwright";
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context=await browser.newContext()
let page=await context.newPage()
 
//navigate to URL

await page.goto("https://www.citigroup.com/global/about-us/global-presence/india")
 
//Accept cookies
await page.locator("xpath=//button[@id='onetrust-accept-btn-handler']").click();
await page.locator("xpath=//div[text()='Careers']").hover();
const [newPage]=await Promise.all([context.waitForEvent("page"), page.locator("xpath=//div[text()='Search Jobs']").click()])
 
//console.log(await newPage.title());
await page.locator("xpath=//button[text()='Accept Cookies']").click();
await newPage.locator("xpath=//input[@class='search-keyword']").fill("QA");
await newPage.locator("xpath=//input[@name='l']").fill("Chennai");
await newPage.locator("xpath=//input[@name='l']").press("ArrowDown");
await newPage.locator("xpath=//input[@name='l']").press("Enter");


await newPage.locator("xpath=//button[text()='Search Jobs']").click();
 


let errorMsg = await newPage.locator("xpath=//span[@role='alert']").innerText();
console.log("Password Error:", errorMsg);


await page.waitForTimeout(2000);
await browser.close()
