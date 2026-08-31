//Task 1 : Basic Data Types

let customerid:number =11;
let customername:string ="Kavi";
let customeractive : boolean =true;
let policypremium : number = 25000;
let policytype : string ="Insurance";

//Print all values

console.log("Customer ID: ",customerid);
console.log("Customer Name: ",customername);
console.log("Customer Active: ",customeractive);
console.log("Policy Premium: ",policypremium);
console.log("Policy Type: ",policytype);

//Print type

console.log("Customer ID type: ",typeof customerid);
console.log("Customer Name Type: ",typeof customername);
console.log("Customer Active Type: ",typeof customeractive);
console.log("Policy premium Type: ",typeof policypremium);
console.log("Policy premium Type: ",typeof policytype);

//Change
policypremium=30000;
console.log("Updated Policy Premium : ", policypremium);

/*Error 
customerid="Kavipriyaa";
customername=10;
customeractive=789;
policypremium="Lic";
policytype=90;*/


