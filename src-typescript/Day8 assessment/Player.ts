//Task 2 

//Part 4 – Create the Team Class
 class Team{
    public teamId :number;
    public teamName: string;

    constructor(teamId:number,teamName:string){
        this.teamId=teamId;
        this.teamName=teamName;
    }
    public displayTeam ():void{
        console.log("Team ID :"+ this.teamId);
        console.log("Team Name :"+ this.teamName);
    }
}


//Part 1 -  Create the Player Class

class Player{
    public playerId : number;
    public playerName :string;
    public team:Team;
    constructor(playerId:number,playerName:string,team:Team){
        this.playerId=playerId;
        this.playerName=playerName;  
        this.team=team;
    }
    public displayPlayer():void{
        console.log("Player Id :" + this.playerId);
        console.log("Player Name :" + this.playerName);  
        console.log("Team Id :" + this.team.teamId);
        console.log("Team Name :" + this.team.teamName); 
    }
    public changeTeam(team: Team): void {
       this.team = team;
   }
}

// Part 5 – Create Team Objects
let team1=new Team(1,"Barcelona");
console.log("Team1 Detail : ");
team1.displayTeam();
console.log("-------------------------------------------");
let team2=new Team(2,"Bayern Munich");
let team3=new Team(3,"Manchester City");
let team4=new Team(4,"Liverpool");
/*team2.displayTeam();
team3.displayTeam();
team4.displayTeam();*/
console.log("Team Details : ")

let teams:Team[]=[team1,team2,team3,team4];
for(let team of teams){
    team.displayTeam();
}
console.log("-------------------------------------------");
//Part 2 - Create Player Objects
let player1= new Player(101,"Lionel Messi",team1);
console.log("Player1 Detail : ")
player1.displayPlayer();
console.log("-------------------------------------------");
let player2= new Player(102,"Neymar Jr",team1);
let player3= new Player(103,"Harry Kane",team2);
let player4= new Player(104,"Kevin De Bruyne",team3);
let player5= new Player(105,"Mohamed Salah",team4);

/*player2.displayPlayer();
player3.displayPlayer();
player4.displayPlayer();
player5.displayPlayer();*/

//Part 3 - Create Player Array
console.log("Player details with the Team details : ")
let players:Player[]=[player1,player2,player3,player4,player5]
for(let player of players){
    player.displayPlayer();
    console.log("-------------------------------------------");
}
console.log("-------------------------------------------");
