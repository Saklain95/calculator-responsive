const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (display.value = "=") {
        try {
            display.value = eval(display.value)
        }
        catch (error) {
            display.value = "Error"
        }
    }
    else {
        display.value = "";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1)
}