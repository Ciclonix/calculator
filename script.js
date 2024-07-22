let first_num, second_num, operator, result;

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
            default:
                display_value += key;
        }

        screen.innerText = display_value;
    }
})