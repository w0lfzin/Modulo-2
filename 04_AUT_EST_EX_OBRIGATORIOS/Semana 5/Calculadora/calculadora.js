function sum() {
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

function subtract() {
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}

function multiply() {
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}

function divide() {
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}

function left() {
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var resultado = document.querySelector('span')
    resultado.innerHTML = parseInt(n1.value) % parseInt(n2.value)
}



