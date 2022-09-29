let operator = 'divide';
let number = [];
let num1 = [1,1];
let answer = 1;


// ----- COMBINE DIGITS FUNCTION -----
function combine(num) {
    if (num1[1] === 'operate') { 
        number = [];
        console.log(`Number array: ${number}`);
        num1[1] = 1;
    } else if (num1[1] === 'clear') {
        number = [];
        console.log(`Number array: ${number}`);
        num1[1] = 1;
    } 
    number.push(num);
    if (num1[1] === 'negative') {
        number.pop();
    }
    joinedString = number.join('');
    joinedNumber = Number(joinedString)
    if (num1[1] === 'negative') {
        joinedNumber = joinedNumber * -1;
        num1[1] === 0;
    }
    changeDisplay(joinedNumber);
    console.log(`Number 1: ${joinedNumber}`)
    return joinedNumber
};

// ----- OPERATER FUNCTIONS -----
let divideButton = document.querySelector('.divide');
divideButton.addEventListener('mousedown', divideFxn);

function divideFxn() {
    num1 = [joinedNumber, 'operate' , 'divide'];
    console.log(num1);
    combine(0);
    return num1
}

let multButton = document.querySelector('.mult');
multButton.addEventListener('mousedown', multFxn);

function multFxn() {
    num1 = [joinedNumber, 'operate', 'mult'];
    console.log(num1);
    combine(0);
    return num1
}

let plusButton = document.querySelector('.plus');
plusButton.addEventListener('mousedown', plusFxn);

function plusFxn() {
    num1 = [joinedNumber, 'operate', 'plus'];
    console.log(num1);
    combine(0);
    return num1
}

let minusButton = document.querySelector('.minus');
minusButton.addEventListener('mousedown', minusFxn);

function minusFxn() {
    num1 = [joinedNumber, 'operate', 'minus'];
    console.log(num1);
    combine(0);
    return num1
}


// ----- EQUALS FUNCTION -----
let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('mousedown', equalsFxn);

function equalsFxn() {
    if (num1[2] === 'divide') {
        answer = num1[0] / joinedNumber;
    } else if (num1[2] === 'mult') {
        answer = num1[0] * joinedNumber;
    } else if (num1[2] === 'plus') {
        answer = num1[0] + joinedNumber;
    } else {
        answer = num1[0] - joinedNumber;
    }
    changeDisplay(answer);
    console.log(`Answer: ${answer}`)
    return answer
}

// ----- CLEAR FUNCTION -----
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('mousedown', clearFxn);

function clearFxn() {
    num1 = [0, 'clear', 0];
    console.log(num1);
    combine(0);
    return num1
}

// ---- NEGATIVE FUNCTION ----
let negButton = document.querySelector('.neg');
negButton.addEventListener('mousedown', negFxn);

function negFxn() {
    num1 = [0, 'negative', 0];
    console.log(num1);
    combine(0);
    return num1
}

// ----- DISPLAY NUMBER -----
let display = document.querySelector('.display');

function changeDisplay(displayText) {
display.innerText = displayText;
console.log(display.innerText);
return display.innerText;
}

// ----- BUTTONS OUTPUT NUMBERS -----
let sevenButton = document.querySelector('.seven');
sevenButton.addEventListener('mousedown', sevenFxn)

function sevenFxn() {
    combine(7);
}

let eightButton = document.querySelector('.eight');
eightButton.addEventListener('mousedown', eightFxn)

function eightFxn() {
    combine(8);
}
let nineButton = document.querySelector('.nine');
nineButton.addEventListener('mousedown', nineFxn)

function nineFxn() {
    combine(9);
}

let fourButton = document.querySelector('.four');
fourButton.addEventListener('mousedown', fourFxn)

function fourFxn() {
    combine(4);
}

let fiveButton = document.querySelector('.five');
fiveButton.addEventListener('mousedown', fiveFxn)

function fiveFxn() {
    combine(5);
}

let sixButton = document.querySelector('.six');
sixButton.addEventListener('mousedown', sixFxn)

function sixFxn() {
    combine(6);
}

let oneButton = document.querySelector('.one');
oneButton.addEventListener('mousedown', oneFxn)

function oneFxn() {
    combine(1);
}

let twoButton = document.querySelector('.two');
twoButton.addEventListener('mousedown', twoFxn)

function twoFxn() {
    combine(2);
}

let threeButton = document.querySelector('.three');
threeButton.addEventListener('mousedown', threeFxn)

function threeFxn() {
    combine(3);
}

let zeroButton = document.querySelector('.zero');
zeroButton.addEventListener('mousedown', zeroFxn)

function zeroFxn() {
    combine(0);
}

