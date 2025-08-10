let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' || /[+\-*/]$/.test(currentInput)) return;
    currentInput += op;
    display.value = currentInput;
}

function appendDot() {
    let parts = currentInput.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1];
    if (!lastPart.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function appendFunction(func) {
    currentInput += func;
    display.value = currentInput;
}

function appendSymbol(symbol) {
    currentInput += symbol;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value ='';
}

function deleteChar() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch {
        display.value = 'Error';
    }
}
