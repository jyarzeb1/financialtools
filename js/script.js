function calculate() {
    var firstNumber = parseFloat(document.getElementById('firstNumber').value);
    var secondNumber = parseFloat(document.getElementById('secondNumber').value);
    var operation = document.getElementById('operation').value;
    var result;

    switch (operation) {
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            if(secondNumber === 0){
                result = 'Infinity';
                break;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').textContent = result;
}
