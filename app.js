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

const calculator = {
    clear: "c",
    toggle: "±",
    percent: "%",
    divide: "/",
    number : [0,1,2,3,4,5,6,7,8,9,],
    period: ".",
    equals: "=",
    plus: "+",
    minus: "-",
    multiply: "*",
    add: function (a,b){
        return this.number[a] + this.number[b]
    },
    subtract: function(a,b){
        return this.number[a] - this.number[b]
    },
    multiply: function(a,b){
        return this.number[a] * this.number[b]
    },
    divide: function(a,b){
        return this.number[a] / this.number[b]
    }


}