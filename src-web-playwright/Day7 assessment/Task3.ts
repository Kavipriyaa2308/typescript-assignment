import { chromium } from "playwright";
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context=await browser.newContext()
let page=await context.newPage()
 
//navigate to URL
await page.goto("https://nasscom.in/")
 
//navigate to Login and Register page
 
//Click login
await page.locator("xpath=//a[@id='myLoginBtn']").first().click();
//Click register
await page.locator('text=REGISTER').first().click();
 
 
//enter firstname
await page.locator("xpath=//input[@id='edit-field-fname-reg-0-value--2']").fill("admin")
//enter lastname
await page.locator("xpath=//input[@id='edit-field-lname-0-value--2']").fill("pass")
//enter email
await page.locator("xpath=//input[@id='edit-mail--2']").fill("admin@gmail.com")
//enter company name
await page.locator("xpath=//input[@id='edit-field-company-name-registration-0-value--2']").fill("Google")
//enter business focus
await page.locator("xpath=//select[@id='edit-field-business-focus-reg--2']").selectOption({label:"IT Consulting"})

//select Register Button
await page.locator("xpath=//input[@id='edit-submit-1788127992--2']").click()
 
await page.waitForTimeout(10000)
await browser.close()