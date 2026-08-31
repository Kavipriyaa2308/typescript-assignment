//TASK 3 - Objects
//Object Creation
let customer:{customerid:number;name:string;
    age:number; isActive:boolean;premium:number;email?:string
}={customerid:101, name:"Kavi", age:28,isActive:true,premium:2300};

//Print object
console.log(customer);

//Print customer name
console.log(customer.name);

//Print premium
console.log(customer.premium);

//Change premium
customer.premium=1200;
console.log(customer.premium);

//Create a optional property
customer.email="kavi@gmail.com";
console.log(customer);

//Create second customer without optional email
let customer2:{customerid:number;name:string;
    age:number; isActive:boolean;premium:number;email?:string
}={customerid:102, name:"Priyaa", age:48,isActive:true,premium:4500};
console.log(customer2);

//Add property that is not having
//customer.phone="7352848474";

