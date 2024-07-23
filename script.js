let first_num = "", second_num = "", operator = "";

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(num1, num2, op) {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (op) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = sub(num1, num2);
            break;
        case "*":
            result = mul(num1, num2);
            break;
        case "/":
            result = div(num1, num2);
            break;
    }

    return result;
}


const keypad = document.querySelector(".keypad");
const screen = document.querySelector(".screen");
let display_value = "";

keypad.addEventListener("click", (event) => {
    if (event.target.classList.contains("key")) {
        key = event.target.innerText;

        switch (key) {
            case "CLEAR":
                display_value = "";
                break;
            case "CANCEL":
                display_value = display_value.slice(0, -1);
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if (operator !== "") {
                    [first_num, second_num] = display_value.split(" " + operator + " ")
                    display_value = operate(first_num, second_num, operator);
                }
                operator = key;
                display_value += " " + key + " ";
                break;
            case "=":
                [first_num, second_num] = display_value.split(" " + operator + " ")
                display_value = operate(first_num, second_num, operator);
                operator = "";
                break;
            default:
                display_value += key;
        }

        screen.innerText = display_value;
    }
})