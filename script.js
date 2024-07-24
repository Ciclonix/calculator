let first_num = "", second_num = "", operator = "", display_value = "", new_num = false, error = false;
const keypad = document.querySelector(".keypad");
const screen = document.querySelector(".screen");


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
        case "×":
            result = mul(num1, num2);
            break;
        case "÷":
            if (num2 === 0) {
                error = true;
                return "(x_x)";
            }
            result = div(num1, num2);
            break;
    }

    if (Number.isNaN(result) || result == Infinity) {
        error = true;
        return "ERROR";
    }

    return String(Math.round(result * 1000) / 1000);
}


function update(key) {
    if (error) {
        display_value = "";
        first_num = "";
        second_num = "";
        operator = "";
        error = false;
    }

    switch (key) {
        case "CLEAR":
            display_value = "";
            first_num = "";
            second_num = "";
            operator = "";
            break;
        case "CANCEL":
            display_value = display_value.slice(0, -1);
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            if (operator !== "") {
                second_num = display_value;
                display_value = operate(first_num, second_num, operator);
            }

            first_num = display_value;
            operator = key;
            new_num = true;
            break;
        case "=":
            if (operator !== "") {
                second_num = display_value;
                display_value = operate(first_num, second_num, operator);
                operator = "";
            }
            break;
        case ".":
            if (display_value.includes(".")) break;
        default:
            if (display_value.length == 11 && !new_num) break;

            if (new_num) {
                display_value = "";
                new_num = false;
            }
            display_value += key;
    }

    if (display_value.length > 11) {
        display_value = "TOO BIG";
        error = true;
    }
    
    screen.innerText = display_value;
}


keypad.addEventListener("click", (event) => {
    if (event.target.classList.contains("key")) {
        key = event.target.innerText;
        update(key);
    }
})


document.addEventListener("keydown", (event) => {
    key = event.key;

    if ((0 <= key && key <= 9) || [".", "+", "-", "="].includes(key)) update(key);
    if (key == "*") update("×");
    if (key == "/") update("÷");
    if (key == "Enter") update("=");
    if (key == "Backspace") update("CANCEL");
    if (key == "c") update("CLEAR");
})