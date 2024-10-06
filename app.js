let addition 
let subtraction
let multiplication
let division


function add(a, b){
    return a+b
}

function subtract(numOne, numTwo){
    return numOne-numTwo
}

function multiply(numOne, numTwo){
    return numOne * numTwo
}

function divide(numOne, numTwo){
    return numOne/numTwo
}

function operate(numOne,numTwo,operator){
    let total = 0
    if(operator === addition){
        total = add(numOne,numTwo)
        console.log(total)
    }else if(operator=== subtraction){
        total = sub(numOne,numTwo)
        console.log(total)
    }else if(operator === multiplication){
        total = multiply(numOne,numTwo)
        console.log(total)
    }else if(operator === division){
        total = divide(numOne,numTwo)
        console.log(total)
    }

}
