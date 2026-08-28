//TASK 2 : Arrays

let customerIds : number[] = [10,11,12,14];
let customerNames : string[] = ["Kavi","Malar","Joo","Boo"];
let policyPremiums : number[] = [25000,30000,28000,35000];

//Add a new value

customerIds.push(15);
customerNames.push("Priyaa");
policyPremiums.push(23000);

//Access the first element
console.log("First Customer ID:", customerIds[0]);
console.log("First Customer Name:", customerNames[0]);
console.log("First Policy Premium:", policyPremiums[0]);

//Access the last element
console.log("Last Customer ID:", customerIds[customerIds.length-1]);
console.log("Last Customer Name:", customerNames[customerNames.length-1]);
console.log("Last Policy Premium:", policyPremiums[policyPremiums.length-1]);

//Print length

console.log("Customer ID length:", customerIds.length);
console.log("Customer Name length:", customerNames.length);
console.log("Policy Premium length:", policyPremiums.length);

//Update element
customerIds[2]=20;
console.log("Updated Customer IDs:", customerIds);
customerNames[0]="Weny";
console.log("Updated Customer Names:", customerNames);
policyPremiums[1]=20987;
console.log("Updated Policy Premium:", policyPremiums);

/*Error
customerIds.push("106");
customerNames.push(400);
policyPremiums.push("Arin");*/



