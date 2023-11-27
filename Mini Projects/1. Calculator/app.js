// script part

let currentDisplay = '';

function c() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

function one() {
    currentDisplay = currentDisplay + '1';
    document.querySelector('#display').value = currentDisplay;
}

function two() {
    currentDisplay = currentDisplay + '2';
    document.querySelector('#display').value = currentDisplay;
}

function plus() {
    currentDisplay = currentDisplay + '+';
    document.querySelector('#display').value = currentDisplay;
}

function three() {
    currentDisplay = currentDisplay + '3';
    document.querySelector('#display').value = currentDisplay;
}

function four() {
    currentDisplay = currentDisplay + '4';
    document.querySelector('#display').value = currentDisplay;
}

function minus() {
    currentDisplay = currentDisplay + '-';
    document.querySelector('#display').value = currentDisplay;
}

function five() {
    currentDisplay = currentDisplay + '5';
    document.querySelector('#display').value = currentDisplay;
}

function six() {
    currentDisplay = currentDisplay + '6';
    document.querySelector('#display').value = currentDisplay;
}

function mul() {
    currentDisplay = currentDisplay + '*';
    document.querySelector('#display').value = currentDisplay;
}

function seven() {
    currentDisplay = currentDisplay + '7';
    document.querySelector('#display').value = currentDisplay;
}

function eight() {
    currentDisplay = currentDisplay + '8';
    document.querySelector('#display').value = currentDisplay;
}

function divide() {
    currentDisplay = currentDisplay + '/';
    document.querySelector('#display').value = currentDisplay;
}

function equal() {
    let result = eval(currentDisplay)
    currentDisplay = result;
    document.querySelector('#display').value = currentDisplay;
}

function nine() {
    currentDisplay = currentDisplay + '19';
    document.querySelector('#display').value = currentDisplay;
}

function zero() {
    currentDisplay = currentDisplay + '0';
    document.querySelector('#display').value = currentDisplay;
}

function dot() {
    currentDisplay = currentDisplay + '.';
    document.querySelector('#display').value = currentDisplay;
}