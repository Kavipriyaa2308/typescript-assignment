import {chromium, type Browser} from "playwright"
let browser:Browser = await chromium.launch({channel:"chrome",headless:false})
let context = await browser.newContext()
let page =await context.newPage()

await page.goto("https://opensource-demo.orangehrmlive.com/");

await page.locator("xpath=//input[@name='username']").fill("Admin");
await page.locator("xpath=//input[@name='password']").fill("admin123");
await page.locator("xpath=//button[@type='submit']").click();

await page.waitForTimeout(1000);
await page.locator("xpath=//span[text()='PIM']").click();
await page.locator("xpath=//a[text()='Add Employee']").click();

await page.locator("xpath=//input[@name='firstName']").fill("John");
await page.locator("xpath=//input[@name='middleName']").fill("A");
await page.locator("xpath=//input[@name='lastName']").fill("Wick");
//let employeeId = Math.floor(10000+Math.random()*90000).toString();
//await page.locator("xpath=//label[text()='Employee Id']/following::input[1]").fill(employeeId);
let employeeid="12345";
await page.locator("xpath=//input[text()='Employee Id']").fill(employeeid);
await page.locator("xpath=//input[@type='file']").setInputFiles("c:\\Users\\Administrator\\Downloads\\image1.jpg")

await page.locator("xpath=//button[@type='submit']").click();

let employeeDetails= await page.locator("xpath=//h6[text()='John Wick']").innerText();
console.log("EmployeeName:", employeeDetails);
await page.waitForTimeout(2000);
await browser.close()