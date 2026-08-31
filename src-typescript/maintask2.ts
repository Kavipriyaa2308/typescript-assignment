//Student Result Calculator
//Task 1 
function calculateTotalMarks(mark1:number,mark2:number,mark3:number):number{
    return mark1+mark2+mark3;
}
console.log("Total Marks:", calculateTotalMarks(85,90,98));

//Task 2
function calculateAverage(totalMarks:number,numberofSubjects:number):number{
    return totalMarks/numberofSubjects;
}
console.log("Average Mark:" ,calculateAverage(450,5));

//Task 3
function calculateGrade(average:number):string{
    if(average>=90){
        return "A";
    }
    else if(average>=75){
        return "B";
    }
    else if(average>=60){
        return "C";
    }
    else if(average>=50){
        return "D";
    }
    else{
        return "F";
    }
}
console.log("Grade :",calculateGrade(60));

//Task 4
function checkPassFail(average:number):string{
    if(average>=50){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
console.log("Result : ",checkPassFail(84.55));

//Task 5
function studentSummary(
    studentName: string,
    totalMarks: number,
    average: number,
    grade: string,
    result: string, ):string { 
        return `Student Name: ${studentName}, Total Marks: ${totalMarks}, Average: ${average},Grade: ${grade}, Result: ${result}`;
        
}
console.log("Summary :",studentSummary("Kavi",253,89.77,"B","Pass"));

//Task 6 
console.log("Total Marks:", calculateTotalMarks(80,96,65));
console.log("Average Marks:", calculateAverage(278,3));
console.log("Grade:", calculateGrade(45.00));
console.log("Result:", checkPassFail(45.00));

//Task 7
console.log(calculateTotalMarks(65,90,100));
console.log(calculateAverage(350,4));
console.log(calculateGrade(75));
console.log(checkPassFail(95));
console.log(studentSummary("Priyaa",270,75,"C","Pass"));

//Task 8
//Student1
let total1=calculateTotalMarks(90,75,63);
let average1=calculateAverage(total1,3);
let grade1=calculateGrade(average1);
let result1=checkPassFail(average1);
console.log(studentSummary("Malar",total1,average1,grade1,result1));
//Student2
let total2=calculateTotalMarks(90,75,63);
let average2=calculateAverage(total2,3);
let grade2=calculateGrade(average2);
let result2=checkPassFail(average2);
console.log(studentSummary("Joo",total2,average2,grade2,result2));
//Student3
let total3=calculateTotalMarks(90,75,63);
let average3=calculateAverage(total3,3);
let grade3=calculateGrade(average3);
let result3=checkPassFail(average3);
console.log(studentSummary("Sanj",total3,average3,grade3,result3));

//Challenge 
//Named Parameters
function studentSummary1({
    studentName,totalMarks,average,grade,result}:{
        studentName: string;totalMarks:number;average:number;grade:string;result:string;
    }):string{
        return `Student Name:${studentName}, Total Marks:${totalMarks}, Average:${average}, Grade:${grade},Result:${result}`;

    }

//Call function by passing details using object
let student1={
    studentName:"Kavi",
    totalMarks:235,
    average:78.90,
    grade:"B",
    result:"Pass"
};
console.log(studentSummary1(student1));

//Verify order
let student2={
    grade:"D",
    result:"Fail",
    totalMarks:289,
    studentName:"Sari",
    average:56.78

};
console.log(studentSummary1(student2));


