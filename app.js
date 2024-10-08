const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".numbers")
const clearButton = document.querySelector('.clear')
const equals = document.querySelector('.equals')
const period = document.querySelector('.period')

let equations =[]
let number
let total =0
let operation=""


function add(a,b){
    total = a+b
    return total
}
function sub(a,b){
    total = a -b
    return total
}
function multi(a,b){
    total = a*b
    return total
}
function divide(a,b){
    if(a==0||b==0){
        return
    }else{
        total = a/b
        return total
    }

}
function percent(a,b){
    total=(a/100) * b
    return total
}
function operate(a,b,operator){
    switch(operator){
        case "+":
            add(a,b)
            display.textContent=total
            break;
        case "-":
            sub(a,b)
            break;
        case "/":
                divide(a,b)
                break;

        case "*":
            multi(a,b)
            break;
        case "%":
            percent(a,b)
            break;

        default:
            break;
    }
}
//number event listener
numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        if(display.textContent.length <=15){
            display.textContent += number.textContent
        }

    })
})
//other button event listener
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        operation = button.textContent
        number = display.textContent
        myNumber = Number(number)
        if(equations[0] == 0 || equations[0] !=typeof "number "){
            equations[0] = myNumber
        }else{
            equations.push(myNumber)
        }
        if(equations[1]){
            equations[1] = operation
        }else{
            equations.push(operation)
        }
        display.textContent=''
    })
})
//run operate functions
equals.addEventListener("click",()=>{
    firstNumber = display.textContent
    equations.push(Number(firstNumber))
    operate(equations[0], equations[2], equations[1])
    display.textContent=total.toFixed(2)
    equations =[]
})

//clear
clearButton.addEventListener("click",()=>{
    total=0
    equations=[]
    display.textContent =''
    number = ''
    operation =''
})

if(total!=0){
    number= total
}

