let num1 = 8;
let num2 = 2;


document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function addNumber(){
          
    let sum = num1+num2;
    sumEl.textContent ="Sum :" + sum;
    
}

function subtractNumber(){

    let Subtract = num1 - num2;
    sumEl.textContent ="Subtract :"+ Subtract;
}

function multiplyNumber(){

    let Multiply = num1*num2;
    sumEl.textContent ="Multiply :" + Multiply;

}

function divideNumber(){

    let Divide = num1/num2;
    sumEl.textContent ="Divison :" +Divide;

} 