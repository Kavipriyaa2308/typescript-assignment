import { chromium } from "playwright";
 
let browser=await chromium.launch({channel:"chrome",headless:false})
let context=await browser.newContext()
let page=await context.newPage()
 
//navigate to URL
await page.goto("https://nasscom.in/",{waitUntil:"networkidle"})
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


//await page.locator("xpath=//input[@name='field_mem_code_of_conduct[0]']//span[@class='checkmark']").check();
await page.locator("xpath=//label[@for='edit-field-mem-code-of-conduct-0']").check();
await page.locator("xpath=//label[@for='edit-field-mem-code-of-conduct-1']").check();

/*Get the captcha question text
const captchaText = await page.locator("xpath=//label[@for='lg-username']").innerText();
console.log("Captcha Question:", captchaText);
/*Extract numbers and operator
const parts = captchaText.replace("=", "").trim().split(" ");
  const num1 = Number(parts[0]);
  const operator = parts[1];
  const num2 = Number(parts[2]);

  let result=0;
  if (operator=== "+") {
      result = num1 + num2;
    }
  else if (operator=== "") {
      result = num1 - num2;
    }
  else if (operator=== "*") {
      result = num1 * num2;
    }
  else if (operator=== "/") {
      result = num1 / num2;
    }
   else{
      throw new Error("Unsupported operator");
   }*/
 

// Get the captcha question text
const captchaText = await page.locator("xpath=//label[@for='lg-username']").innerText();
console.log("Captcha Question:", captchaText);
 
// Extract numbers and operator
const match = captchaText.match(/(\d+)\s*([+\-*/])\s*(\d+)/);
 
if (match) {
  const num1 = Number(match[1]);
  const operator = match[2];
  const num2 = Number(match[3]);
 
  let result: number;
 
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Unsupported operator");
  }
 
  console.log("Answer:", result);
 
  // Enter answer in textbox
  await page.locator("#edit-captcha-response").fill(result.toString());
}
//await page.locator("xpath=//input[@name='captcha_response']").fill("19");*/

await page.locator("xpath=//input[@id='edit-submit']").click();

const error= await page.locator("xpath=//h2[@id='swal2-title']").innerText();
console.log("Error Message for Company name : ",error);
/*let comperror=await page.locator("xpath=//div[@id='swal2-html-container']").innerText();
console.log("Error Message:",comperror)*/

await page.waitForTimeout(5000)
await browser.close()