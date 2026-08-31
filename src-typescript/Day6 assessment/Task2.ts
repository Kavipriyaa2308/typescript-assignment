//Task 2 - Bank Account

class BankAccount
{
    public accountHolderName:string;
    public accountNumber:number;
    public balance:number;

    constructor(accountHolderName:string,accountNumber:number,balance:number){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    //Deposit Amount
    public deposit(amount:number):void{
        this.balance=this.balance+amount;
        console.log("Deposited Amount : "+amount);
    }
    //Withdraw Amount
    public withdraw(amount:number):void{
        if(amount<=this.balance){
            this.balance=this.balance-amount;
            console.log("Withdraw Amount: "+amount);
        }
        else{
            console.log("Insufficient Balance");
        }
    }
    public displayBalance():void{
        console.log("Account Holder Name :"+ this.accountHolderName);
        console.log("Account Number :"+ this.accountNumber);
        console.log("Current Baance :"+ this.balance);
    }
}
let acc1=new BankAccount("Kavi",230820,10000);
acc1.displayBalance();
console.log("---------------------------------");
acc1.deposit(5000);
acc1.displayBalance();
console.log("---------------------------------");
acc1.withdraw(3000);
acc1.displayBalance();
console.log("---------------------------------")
acc1.withdraw(20000);
acc1.displayBalance();
