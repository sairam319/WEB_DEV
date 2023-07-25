let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message="";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
    
    let randomNumber= Math.floor(Math.random()*13) + 1;
      if(randomNumber > 10){

        return 10;
      }
      else if(randomNumber === 1){

        return 11;
      }else{

        return randomNumber;
      }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard];
    sum = firstCard+secondCard;
    renderGame();
}

function renderGame(){

    sumEl.textContent = "Sum :" + sum;
    cardsEl.textContent ="Cards : " ;
    for(let a=0;a<cards.length;a++){

        cardsEl.textContent += cards[a]+ " "
    }
    if(sum<=20){

        message="Do you want to draw new card ??";
    }
    
    else if (sum === 21){
    
        message="YOU GOT BLACK JACK !!";
        hasBlackJack = true;
    }
    
    else {
    
        message="You are out of the game";
        isAlive = false;
        
    }

    messageEl.textContent = message;
}

function newCard(){
 
    let card = getRandomCard();
    sum +=card;
    cards.push(card);
    console.log(cards)
    renderGame();
    console.log("drawing a new card");
}

