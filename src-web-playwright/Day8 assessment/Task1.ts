import { chromium } from "playwright";
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context=await browser.newContext()
let page=await context.newPage()
 
//navigate to URL
await page.goto("https://www.medibuddy.in/")

//Click login
await page.locator("xpath=//a[text()='Login']").click();
//Click I have a corporate Acccount (Use both text and attribute type both are working)
//await page.locator("xpath=//div[@ng-click='linkAccount()']").click();
await page.locator("xpath=//div[text()='I have a Corporate Account']").click();
//Click Learn more
//await page.locator("xpath=//a[@ng-click='openLearnMoreSection()']").click();
await page.locator("xpath=//a[text()='Learn More']").click();
//Click Skip
//await page.locator("xpath=//a[@ng-click='skipCorpUserPhone()']").click();
await page.locator("xpath=//a[text()='skip']").click();

//Click Login using username nd password
//await page.locator("xpath=//a[@ng-click='openUsernameScreen()']").click();
await page.locator("xpath=//a[text()='Login using Username & Password']").click();
//enter username
await page.locator("xpath=//input[@id='username']").fill("John")
await page.locator("xpath=//button[text()='Proceed']").click(); //Orelse use normalize because proceed has some space bfr and after

//enter password
await page.locator("xpath=//input[@id='password']").fill("john123")

//Click show password
await page.locator("xpath=//img[@alt='hide-password']").click()
//Click Signin
await page.locator("xpath=//button[text()='Sign In']").click()
//Get the error message and print
const errorMessage= await page.locator("xpath=//div[@ng-if='isPasswordWrong']")
console.log(await errorMessage.innerText());

 
await page.waitForTimeout(10000)
await browser.close()