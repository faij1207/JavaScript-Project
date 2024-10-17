function clearDisplay() {
    document.calc.display.value = '';
}

function deleteLast() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.calc.display.value += value;
}

function calculateResult() {
    try {
        let expression = document.calc.display.value;

        // Check for division by zero
        if (/\/0(?!\d)/.test(expression)) {
            throw new Error("Cannot divide by zero");
        }

        // Validate input for invalid characters
        if (/[^0-9+\-*/().]/.test(expression)) {
            throw new Error("Invalid input");
        }

        // Evaluate the expression
        let result = eval(expression);

        // Check for overflow/underflow
        if (!isFinite(result)) {
            throw new Error("Overflow/Underflow error");
        }

        document.calc.display.value = result;
    } catch (error) {
        document.calc.display.value = error.message;
    }
}