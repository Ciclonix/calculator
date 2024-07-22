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