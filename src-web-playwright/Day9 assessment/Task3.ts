import {chromium, type Browser} from "playwright"
let browser:Browser = await chromium.launch({channel:"chrome",headless:false})
let context = await browser.newContext()
let page =await context.newPage()

await page.goto("http://demo.openemr.io/b/openemr/");
await page.locator("xpath=//input[@placeholder='Username']").fill("admin")
await page.locator("xpath=//input[@placeholder='Password']").fill("pass")
await page.locator("xpath=//select[@name='languageChoice']").selectOption({label:"English (Indian)"})
await page.locator("xpath=//button[text()='Login']").click();
await page.locator("xpath=//div[text()='Patient']").click();
await page.locator("xpath=//div[text()='New/Search']").click();

const fillFrame=page.frameLocator("xpath=//iframe[@name='pat']")

await fillFrame.locator("xpath=//input[@placeholder='First Name']").fill("Kavi");
await fillFrame.locator("xpath=//input[@placeholder='Last Name']").fill("Priyaa");
await fillFrame.locator("xpath=//input[@title='Date of Birth']").fill("2026-09-03");
await fillFrame.locator("xpath=//select[@title='Birth Sex']").selectOption({label:"Female"});
await fillFrame.locator("xpath=//button[@name='create']]").click();
await fillFrame.locator("xpath=//button[text()='Confirm Create New Patient']]").click();

const patientFrame=page.frameLocator("xpath=//iframe[@id='modalframe']")
const birthdaymessage=patientFrame.locator("body").innerText();
console.log(birthdaymessage);

await page.locator("xpath=//div[@class='closeDlgIframe']]").click();


const result=await page.locator("xpath=//span[contains(text(),'Medical Record Dashboard - Kavi Priyaa']").innerText();
console.log(result);

await page.waitForTimeout(2000);
await browser.close()