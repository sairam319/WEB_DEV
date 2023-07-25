let firstCard = 6;
let secondCard = 9;
let cards = [firstCard,secondCard];
let sum = firstCard+secondCard;
let hasBlackJack = false;
let isAlive = true;
let message="";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){

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
 
    let card = 6;
    sum +=card;
    cards.push(card);
    console.log(cards)
    renderGame();
    console.log("drawing a new card");
}

