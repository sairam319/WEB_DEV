let randomNumber = Math.random()*6;

console.log(randomNumber);


let floorNumber = Math.floor(3.54654);


console.log(floorNumber);


let jumbleNumber = Math.floor(Math.random()*6);

console.log(jumbleNumber)


/**Creating a Dice Function */


function rollDice(){
 
     
    let randomDiceNumber = Math.floor(Math.random()*6) + 1;
     return randomDiceNumber;

}

console.log(rollDice())
