//TASK 5 - E-COMMERCE ORDER

let customername:string = "kavi priyaa";
let productname:string="Laptop";
let price:number=45000;
let quantity:number=2;
let discount:number=10;
let orderId:string|number="ORD1001";
let isPremiumCustomer:boolean=true;

let products:string[]=["Laptop","Mouse","Keyboard","Monitor"];

//1.Customer name
//Remove spaces
customername=customername.trim();

//Convert to uppercase
customername=customername.toUpperCase();
console.log("Customer Name:" ,customername);
console.log("Name Length:" , customername.length);

//2.Product Name
//Convert to lowercase
productname=productname.toLowerCase();
console.log("Product Name: ",productname);

//Check have top
console.log("Contains top: ",productname.includes("top"));

//Check starts with lap
console.log("Starts with lap: ",productname.startsWith("lap"));

//3.Price Calcuation
//Total price
let totalprice =price*quantity;
console.log("Total price:", totalprice);

//Discount amount
let discountamt=totalprice*discount/100;
console.log("Discount price:", discountamt);

//Final price after discount
let final=totalprice-discountamt;
console.log("Final price: ",final);

//4.Premium Customer
//Gets additional 5% discount
let finalpay=final;
if(isPremiumCustomer){
    let premiumdiscount=final*5/100;
    finalpay=final-premiumdiscount;

}
console.log("Final Payable Amount:", finalpay);

//5.Order ID
//Check type
console.log("Order ID:",orderId);
console.log("Order ID type:" , typeof orderId);

if(typeof orderId=="string")
{
    let lowerOrderId = orderId.toLowerCase();
    console.log("Lowercase Order ID:", lowerOrderId);
    console.log("Starts with ord:", lowerOrderId.startsWith("ord"));

}

//6.Product Array
console.log("Number of products:", products.length);
console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length-1]);
products.push("Webcam");
console.log("Products after adding :", products);
console.log("Mouse exists:", products.includes("Mouse"));
console.log("Products in lowercase:");
for(let product of products){
    console.log(product.toLowerCase());
}

//7.Final Validation
if(finalpay<80000){
    console.log("PASS");
}
else{
    console.log("FAIL");
}