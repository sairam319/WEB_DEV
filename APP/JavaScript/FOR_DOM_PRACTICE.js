let sentence = ["Hello","my","name","is","Datta"];
let messageEl = document.getElementById("message-el");

for (let a=0; a<sentence.length ;a++ ){

        messageEl.textContent = sentence[a];
}