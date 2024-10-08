const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".numbers")
const clearButton = document.querySelector('.clear')
const equals = document.querySelector('.equals')
let equations =[]
let number=""
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
    total = a/b
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
        default:
            break;
    }
}
numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        display.textContent += number.textContent
    })
})
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        operation = button.textContent
        number = display.textContent
        myNumber = parseInt(number)
        equations.push(myNumber)
        equations.push(operation)
        display.textContent=''
    })
})
equals.addEventListener("click",()=>{
    firstNumber = display.textContent
    equations.push(parseInt(firstNumber))
    operate(equations[0], equations[2], equations[1])
    display.textContent= total
})

clearButton.addEventListener("click",()=>{
    equations=[]
    display.textContent =''
    number = ''
    operation =''
})


