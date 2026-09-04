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
await fillFrame.locator("xpath=//input[@title='Date of Birth']").fill("2026-09-04");
await fillFrame.locator("xpath=//select[@title='Birth Sex']").selectOption({label:"Female"});
await fillFrame.locator("xpath=//button[@name='create']").click();

const patientFrame=page.frameLocator("xpath=//iframe[@id='modalframe']")
//await patientFrame.locator("xpath=//button[text()='Confirm Create New Patient']").click();

//handle alert here 
page.on("dialog",async dialog=>{
    let actualAlertMessage=dialog.message();
    console.log(actualAlertMessage);

    await dialog.accept()
});

await patientFrame.locator("xpath=//button[text()='Confirm Create New Patient']").click();

await page.waitForTimeout(5000);
//Frame for birthdaybox
const messageFrame= page.frameLocator("xpath=//iframe[@name='bdayreminder']")
const birthdaymessage= await messageFrame.locator("xpath=//p[@class='h2']").innerText();
console.log(birthdaymessage);

await page.locator("xpath=//div[@class='closeDlgIframe']").click();

//Frame for dashboard
const dashboardFrame=page.frameLocator("xpath=//iframe[@name='pat']")
const result=await dashboardFrame.locator("xpath=//span[@class='navbar-brand mb-0 h1']").innerText(); // It will call only that name of the patient
//const result1=await dashboardFrame.locator("xpath=//span[text()='Medical Record Dashboard - Kavi Priyaa']").innerText();
console.log(result);
//console.log(result1);

await page.waitForTimeout(2000);
await browser.close()