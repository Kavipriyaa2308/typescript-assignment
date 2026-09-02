//Task 1 - Orange Playwright
import {chromium, type Browser} from "playwright"

let browser:Browser = await chromium.launch({channel:"chrome",headless:false})

let context = await browser.newContext()

let page =await context.newPage()

await page.goto("https://orangehrm.com/book-a-free-demo")
await page.locator("xpath=//button[@id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']").click()

await page.locator("xpath=//input[@id='Form_getForm_FullName']").fill("Kavipriyaa")
await page.locator("xpath=//input[@id='Form_getForm_Email']").fill("kavi@gmail.com")
await page.locator("xpath=//input[@id='Form_getForm_Contact']").fill("9989898760")
await page.locator("xpath=//input[@id='Form_getForm_CompanyName']").fill("EY")
await page.locator("xpath=//input[@id='Form_getForm_JobTitle']").fill("QA")

await page.locator("xpath=//select[@id='Form_getForm_Country']").selectOption({label:"India"})
await page.locator("xpath=//select[@id='Form_getForm_NoOfEmployees']").selectOption({label:"51 - 200"})
await page.locator("xpath=//input[@id='Form_getForm_action_submitForm']").click()
/*let actualTitle =await page.title()

console.log(actualTitle)*/

await page.waitForTimeout(5000)

await browser.close()
