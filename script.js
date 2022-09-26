let operator = 'plus';
let num1 = 6;
let num2 = 9;


function operate(operator, num1, num2) {
    console.log(operator)
    if (operator == "plus") {
        answer = num1 + num2;
    } else if (operator == 'minus') {
        answer = num1 - num2;
    } else if (operator == 'mult') {
        answer = num1 * num2;
    } else { 
        answer = num1 / num2;
    }
    return answer; 
};
