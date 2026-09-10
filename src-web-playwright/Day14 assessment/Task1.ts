import { chromium } from "playwright";
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context=await browser.newContext()
let page=await context.newPage()
 
//navigate to URL
await page.goto("https://nasscom.in/")
//Cookies
await page.locator("xpath=//button[normalize-space()='Accept All']").click();
await page.locator("xpath=//li/a[normalize-space()='Become a member']").first().click();
await page.locator("xpath=//input[@placeholder='Company Name in India*']").fill("EYGDS");
await page.locator("xpath=//select[@name='field_state_member']").selectOption({label:"Tamil Nadu"});
await page.locator("xpath=//select[@name='field_city_membership']").selectOption({label:"Chennai"});
await page.locator("xpath=//textarea[@placeholder='Address*']").fill("Anna nagar, Chennai");
await page.locator("xpath=//label[normalize-space()='Co-innovation with Start Ups']").click();
await page.locator("xpath=//label[normalize-space()='Engagement on key policy issues']").click();

await page.locator("xpath=//input[@placeholder='Total Employees (Nos.)*']").fill("800");
await page.locator("xpath=//select[@name='field_total_employees_year']").selectOption({label:"FY 2025-26"});
await page.locator("xpath=//a[text()='Calculate Fee']").click();

page.on("dialog",async dialog=>{
    let actualAlertMessage=dialog.message();
    console.log(actualAlertMessage);

    await dialog.accept()
});

const alert= await page.locator("xpath=//label[text()='*This field is required.']").innerText();
console.log("Error Message : ",alert);

await page.locator("xpath=//input[@name='files[field_additional_document_0]']").setInputFiles("c:\\Users\\Administrator\\Downloads\\Assignment Day1 Test.pdf")

await page.locator("xpath=//span[normalize-space()='We have read the ']").click();
await page.locator("xpath=//span[normalize-space()='By submitting the contact information, you are agreeing to receive communication from nasscom. Privacy Policy can be accessed by ']").click();
//await page.locator("xpath=//input[@name='field_mem_code_of_conduct[0]']//span[@class='checkmark']").check();

await page.locator("xpath=//input[@name='captcha_response']").fill("19");
await page.locator("xpath=//input[@id='edit-submit']").click();

const error= await page.locator("xpath=//h2[text()='Company Type Required']").innerText();
console.log("Error Message for Company name : ",error);


await page.waitForTimeout(10000)
await browser.close()