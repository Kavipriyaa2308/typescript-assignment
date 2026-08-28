//TASK 4 - ANY VS UNKNOWN

let value1:any="Hello"; //Any allows to directly access the length
let value2:unknown="Hello";//For unknown we want to check the type orelse it will give error

console.log(value1.length);
//console.log(value2.length);Unknown will give typescript error
 
//Type checking with unknown
if(typeof value2=="string") //Check type nd process
{
    console.log(value2.length);
}
 //Create number using unknown
 let data:unknown=100;

 if(typeof data=="number"){ //Check the type of data nd perform addition
    console.log(data+10);

 }

 /*Unknown is safer than any because it make us to check the type 
 before using the value .But in any , we can use the value directly without checking type 
 so, Unknown feels safer.*/
