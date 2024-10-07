const button = document.querySelectorAll("button")

function add(a, b){
    return a+b
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a/b
}

function operate(a,b,c){
    let total = 0
    if(c==add){
        total = add(a,b)
        return total
    }else if(c==subtract){
        total = subtract(a,b)
        return total
    }else if(c == multiply){
        total = multiply(a,b)
        return total
    }else if(c== divide){
        total = divide(a,b)
        return total
    }
    
}

