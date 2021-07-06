let inputAdults   = document.getElementById("adult")
let inputChild    = document.getElementById("child")
let inputDuration = document.getElementById("duration")
let result        = document.getElementById("result")
let goCalcButton  = document.getElementById('goCalc')

goCalcButton.addEventListener('click',visibleTemplate)

function calc() {

    let adults = inputAdults.value
    let childs = inputChild.value
    let duration = inputDuration.value

    let qntMeat = (meatForPeaple(duration) * adults + (meatForPeaple(duration)/2 * childs))/1000
    let qntBeer = Math.ceil((beerForPeaple(duration) * adults)/355) 
    let qntdrink = Math.ceil((drinkForPeaple(duration) * adults + (drinkForPeaple(duration)/2 * childs))/2000)

    result.innerHTML =  `<img src="./img/meat.svg"/> <P>${qntMeat}kg de carne </p>`
    result.innerHTML += `<img src="./img/beer.svg"/> <P>${qntBeer} Latas de cerveja </p>`
    result.innerHTML += `<img src="./img/refrigerantes.png"/> <P>${qntdrink} Garrafas de refrigerante </p>`
}   

function meatForPeaple(duration){   
    if( duration >= 6){
        return 650
    }else{
        return 400
    }
}

function beerForPeaple(duration){   
    if( duration >= 6){
        return 2000
    }else{
        return 1200
    }
}

function drinkForPeaple(duration){   
    if( duration >= 6){
        return 1500
    }else{
        return 1000
    }
}

function visibleTemplate(){

    let text = document.getElementById('data-text')
    let calcClass = document.getElementsByClassName('calc')[0]

    text.style.display = "none";
    calcClass.style.display = "flex";
}