let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime(){
       
    if(player1Time<player2Time){

        return player1Time
    }else if(player1Time > player2Time){

        return player2Time;
    }else{

        return player1Time;
    }

}


function totalRaceTime(){

    return player1Time+player2Time;


}

let totalRaceTime = totalRaceTime();

console.log(totalRaceTime);