let fruit = ["Apple","Orange","Apple","Apple","Orange"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


function pickFruit(){
         
    for(let a =0; a < fruit.length;a++){

        if(fruit[a]==="Apple"){

            appleShelf.textContent += fruit[a] + " ";

        }else{

            orangeShelf.textContent += fruit[a] + " ";

        }
    }

}

pickFruit();

