//Typescript - Arguments and Return Type
//Task 1
function calculateSalary(basicSalary:number,bonus:number):number{
    return basicSalary+bonus;
}

//Task 2
function isEligible(age:number):boolean{
    return age>=18;
}

//Task 3
function getFullName(firstName:string,lastName:string):string{
    return firstName+" "+lastName;
}

//Task 4
function calculateDiscount(price:number,discountPercentage:number):number{
    return price-(price*discountPercentage/100);
}

//Task 5
function displayEmployeeDetails(employeeName:string,salary:number):void{
    console.log("Employee Name: ",employeeName);
    console.log("Salary: ",salary);

}

//Task 6
console.log("Total Salary: ", calculateSalary(30000,5000));
console.log("Eligible Age: ", isEligible(30));
console.log("Full Name: ", getFullName("Kavi","Priyaa"));
console.log("Discount Price: ", calculateDiscount(2000,10));
displayEmployeeDetails("Kavi",35000);

//Task 7
console.log("------Different Arguments-----")
console.log("Total Salary: ", calculateSalary(74900,7500));
console.log("Eligible Age: ", isEligible(13));
console.log("Full Name: ", getFullName("Malar","Joo"));
console.log("Discount Price: ", calculateDiscount(6450,25));
displayEmployeeDetails("San",50000);