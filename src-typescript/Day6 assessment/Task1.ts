//Task 1 - Student Details
class Student{
    public studentName:string;
    public rollNumber:number;
    public age:number;
    public course:string;

    constructor(studentName:string,rollNumber:number,age:number,course:string){
        this.studentName=studentName;
        this.rollNumber=rollNumber;
        this.age=age;
        this.course=course;
    }
    public displayDetails():void{
        console.log("Student Name: "+ this.studentName);
        console.log("Roll Number: "+ this.rollNumber);
        console.log("Age: "+ this.age);
        console.log("Course: "+ this.course);
    }
}
let student1 = new Student("Kavi",101,28,"Computer Science");
let student2 = new Student("Priyaa",102,30,"Information Technology");

student1.displayDetails();
student2.displayDetails();