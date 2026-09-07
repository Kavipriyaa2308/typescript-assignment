import {chromium, type Browser} from "playwright"
let browser:Browser = await chromium.launch({channel:"chrome",headless:false})
let context = await browser.newContext()
let page =await context.newPage()

await page.goto("https://www.salesforce.com/in/sales/free-trial/ee/");

//in inspect it wan under shadow root , so we use css concept
await page.locator("css=input[name='firstName']").fill("john");
await page.locator("css=input[name='lastName']").fill("wick")
await page.locator("css=input[name='jobTitle']").fill("IT Manager")
await page.locator("css=input[name='company']").fill("EY")
await page.locator("css=select[name='employees']").selectOption({label:"201-500 employees"})
await page.locator("css=select[name='country']").selectOption({label:"United Kingdom"})
await page.locator("css=input[name='email']").fill("john@gmail.com")
await page.locator("css=div[class='checkbox--faux']").click()
await page.locator("css=button[type='submit']").click()
//for css text wants to be denoted like this only
let errorMsg = await page.locator("text=Enter valid phone number").innerText();
console.log("Password Error:", errorMsg);
//let message:string=await page.getByText("Enter vaid phone number").innerTExt();
//let message=await page.getByTest("valid phone",{exact:false}).innerText();
await page.waitForTimeout(2000);
await browser.close()