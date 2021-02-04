let inputAdults   = document.getElementById("adult")
let inputChild    = document.getElementById("child")
let inputDuration = document.getElementById("duration")
let result        = document.getElementById("result")

function calc() {

    let adults = inputAdults.value
    let childs = inputChild.value
    let duration = inputDuration.value

    let qntMeat = (meatForPeaple(duration) * adults + (meatForPeaple(duration)/2 * childs))/1000
    let qntBeer = Math.ceil((beerForPeaple(duration) * adults)/355) 
    let qntdrink = Math.ceil((drinkForPeaple(duration) * adults + (drinkForPeaple(duration)/2 * childs))/2000)

    result.innerHTML =  `<P>${qntMeat}kg de Carnes </p>`
    result.innerHTML += `<P>${qntBeer} latas de Cerveja </p>`
    result.innerHTML += `<P>${qntdrink} garrafas de Bebidas </p>`
    result.innerHTML += `<hr>`
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
