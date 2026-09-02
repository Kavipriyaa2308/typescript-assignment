//Task 2: Car class
export class Car{
    public carNumber:string; //Non static-diff for each car
    public carModel:string;
    public carColor:string;
    public carPrice:number;

    public static companyName:string="Maruti"; //Static -common for a cars
    public static companyLocation:string="Chennai";

    private speed:number;
    constructor(
        carNumber:string, carModel:string, carColor:string, carPrice:number,speed:number)
        {
            this.carNumber=carNumber;
            this.carModel=carModel;
            this.carColor=carColor;
            this.carPrice=carPrice;
            this.speed=speed;
        }
        //Getter for speed
        public getSpeed(): number{
            return this.speed;
        }
        //Setter
        public setSpeed(speed:number):void{
            if(speed>=0){
                this.speed=speed;
            }
        }
        //Print car details
        public printCarDetails():void{
            console.log("Car Number :" +this.carNumber);
            console.log("Car Model :" +this.carModel);
            console.log("Car Color :" +this.carColor)
            console.log("Car Price :" +this.carPrice)
            console.log("Company Name :" +Car.companyName);
            console.log("Company Location :" +Car.companyLocation);
            console.log("Speed :" +this.speed);
            console.log("------------------------------------------");
        }
        //Increase speed by 10 
        public accelerate():void{
            this.speed=this.speed+10;
        }
        //Decrease speed by 10
        public brake():void{
            this.speed=this.speed-10;
            if(this.speed<0){
                this.speed=0; //Speed never become negative
            }
        }
    }

//Create Car Objects
let car1=new Car(
    "TN01AB1234","Swift","White",750000,50
);
let car2=new Car(
    "TN02CD5678","Baleno","Blue",900000,60
);

//Call objects
car1.printCarDetails();
car2.printCarDetails();

//Call accelerate on car1
car1.accelerate();
car1.accelerate();

//Call brake on car2
car2.brake();

//Call again Cardetails
car1.printCarDetails();
car2.printCarDetails();

//Compare speed of 2 cars
if(car1.getSpeed()>car2.getSpeed()){
    console.log("Swift has the higher speed.");
}
else if(car2.getSpeed()>car1.getSpeed())
{
    console.log("Baleno has the higher speed.");
}
else{
    console.log("Both cars have the same speed.")
}

//Compare price
if(car1.carPrice>car2.carPrice)
{
    console.log("Swift is more expensive.")
}
if(car1.carPrice>car2.carPrice)
{
    console.log("Swift is more expensive.")
}
else if(car2.carPrice>car1.carPrice)
{
    console.log("Baleno is more expensive.")
}
else
{
    console.log("Both cars have the same price.")
}

//Access speed
console.log("Car1 Speed: "+car1.getSpeed()+" km/h");
console.log("Car2 Speed: "+car2.getSpeed()+" km/h");

//Modify speed
car1.setSpeed(80);
console.log("Car 1 Speed after modified: "+ car1.getSpeed()+" km/h");

//one car doesnt after another car speed
car1.setSpeed(100);
console.log("Car1 Speed: "+ car1.getSpeed()+" km/h");
console.log("Car2 Speed: "+ car2.getSpeed()+" km/h");

