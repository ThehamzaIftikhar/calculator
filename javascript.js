
let first_num = null;
let operator = null;
let second_num = null;
let display_value = null;
let display_text = document.querySelector('h1');
display_text.textContent = 0;


let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        balancer(e.target.textContent);
        display_text.textContent = display_value;
    })
})

function balancer(button) {
    if (button === "=" && first_num !== null && operator !== null 
        && second_num !== null || first_num !== null && operator !== null 
        && second_num !== null) {
        first_num = display_value = operate(first_num, operator, second_num);
        operator = second_num = null;
        return;
    }
    if (/^[0-9]$/.test(button)) {
        if (first_num === null) {
            display_value = first_num = button;
            return;
        } else if (operator !== null && second_num === null) {
            display_value = second_num = button;
            return;
        }
    }
    else if (/^[+\-*/]$/.test(button)) {
        if (first_num !== null && operator === null) {
            display_value = operator = button;
        }
    }
    else if (button === "AC") {
        first_num = operator = second_num = display_value = null;
    }
} 

function operate(first_num, operator, second_num)
{
    switch(operator)
    {
        case "+":
            return add(first_num, second_num);
        case "-":
            return subtract(first_num, second_num);
        case "*":
            return multiply(first_num, second_num);
        case "/":
            return divide(first_num, second_num);
    }
}

function add(a, b)
{
    return Number(a) + Number(b);
}

function subtract(a, b)
{
    return Number(a) - Number(b);
}

function multiply(a, b) 
{
    return Number(a) * Number(b);
}

function divide(a, b)
{
    if (b === "0") {
        return "you kidding me?";
    }
    else {
        return (Number(a) / Number(b)).toFixed(4);
    }
}