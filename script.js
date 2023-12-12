//Display
var display = document.getElementById("display")

// Array que recebe bptões precionados
var listenerButton = []

// Botões Operacionais:

listenerButton.push(document.getElementById("division"))
listenerButton.push(document.getElementById("multiplication"))
listenerButton.push(document.getElementById("subtraction"))
listenerButton.push(document.getElementById("sum"))

//Botões numericos

listenerButton.push(document.getElementById("num1"))
listenerButton.push(document.getElementById("num2"))
listenerButton.push(document.getElementById("num3"))
listenerButton.push(document.getElementById("num4"))
listenerButton.push(document.getElementById("num5"))
listenerButton.push(document.getElementById("num6"))
listenerButton.push(document.getElementById("num7"))
listenerButton.push(document.getElementById("num8"))
listenerButton.push(document.getElementById("num9"))
listenerButton.push(document.getElementById("num0"))

//botões ponto 
listenerButton.push(document.getElementById("point"))

//Botão IGUAL
var buttonResult = document.getElementById("result")

//Botão C
var buttonCleanDisplay = document.getElementById("clearDisplay")

//Botão CE
var buttonDeleteDigit = document.getElementById("deleteDigit")

//Verificadores de Decimais
var pointCounter = 0
var pointLimiter = 1

document.addEventListener("DOMContentLoaded", function() {
    if (listenerButton) {
        for (var i = 0; i < listenerButton.length; i++) {
            listenerButton[i].addEventListener("click", showIndisplay)
        }
    }
})

//Função do Botão result
buttonResult.onclick = function () {
    calculateResult()
}

//função do botão CE
buttonDeleteDigit.onclick = function() {
    deleteLastDigit()
}

//Função do Botão C
buttonCleanDisplay.onclick = function() {
    display.value = ""
    pointCounter = 0
}

//Função de Calculo do Resultado:
function calculateResult() {
    if (verifyOperator(display.value.substring(display.value.length - 1, 
        display.value.length))) {
            deleteLastDigit()
        }

        var calculatedValue = calculateArray(display.value)

        if (calculatedValue || calculatedValue == "0") {
            display.value = calculatedValue
        }
    }

//Função de deletar o ultimo digito ( CE )
function deleteLastDigit() {
    if (display.value.length > 0) {
        if (display.value[display.value.length -1] === ".") {
            pointCounter = 0
        }
        display.value = display.value.substring(0, display.value.length -1)
    }
}

//Função para exibir no display
function showIndisplay() {
    lastDigit = this.value

    if (verifyOperator(lastDigit)) {
        pointCounter = 0

        if (verifyOperator(display.value.substring(display.value.length - 1, display.value.length))) {
            deleteLastDigit()
        }
    }

    if (verifyDecimalPoint(lastDigit) === true) {
        pointCounter ++

        if (pointCounter > pointLimiter) {
            return
        }
    }
    display.value += lastDigit
}

//Função de Verificação do operador
function verifyOperator(operadorValue) {
    switch(operadorValue) {
        case "*":
            return true
        case "/":
            return true
        case "-":
            return true
        case "+":
            return true
        default:
            return false
    }
}

//Função de Verificação de ponto decimal
function verifyDecimalPoint(digitedValue) {
    if(digitedValue === ".") {
        return true
    }
    else {
        return false
    }
    }

//Função para executar os Calculos
function calculateArray(expression) {
    try {
        return eval(expression)
    } catch (error) {
        console.error("Erro de Avaliação: ", error)
        return "Error!"
    }
}

//Função de Multiplicação
function multiplyArray(parameter) {
    return parameter.reduce((acc, val) => acc * parseFloat(val), 1)
}

//Função de Divisão:
function divideArray(parameter) {
    return parameter.reduce((acc, val) => acc / parseFloat(val))
}

//Função de Subtração:
function subtractArray(parameter) {
    return parameter.reduce((acc, val) => acc - parseFloat(val))
}

//Função de Soma:
function sumArray(parameter) {
    return parameter.reduce((acc, val) => acc + parseFloat(val), 1)
}