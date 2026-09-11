import {chromium } from "playwright"
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context =await browser.newContext()
let page=await context.newPage()
 
await page.goto("https://www.citigroup.com/global/about-us/global-presence/india");
 
const acceptCookies = page.locator("xpath=//button[@class='button.cookies-accept']");
 
await page.locator("xpath=//div[text()='Careers']").hover();
 
let promise = page.waitForEvent("popup");
await page.locator("xpath=//div[text()='Search Jobs']").click();
const newPage = await promise;
 
const acceptCookies1 = newPage.locator("xpath=//button[text()='Accept Cookies']").click();
 
await newPage.locator("xpath=//input[@name='k']").fill("QA");
 
await newPage.locator("xpath=//input[@name='l']").fill("Chennai, Tamil Nadu");
 
await newPage.locator("xpath=//a[text()='Chennai, Tamil Nadu']").click();
 
await newPage.locator("xpath=//button[@class='search-form-button']").click();
 
const jobList = await newPage.locator("xpath=//section[@id='search-results-list']/span").innerText();
console.log(jobList);
 
await page.waitForTimeout(5000)
await browser.close();