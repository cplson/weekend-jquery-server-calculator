$(document).ready(onReady);

let operation;
function onReady(){
    console.log("JQuery loaded");

    // Listener for any button thats a digit 
    // or decimal that needs to be displayed
    $('.number').on('click', inputDigit);

    // Listener for any button thats an operator
    $('.operator').on('click', inputOperator);
}

// function to display the number on the display
function inputDigit(){
    // Assign the current display text to a string 'displayString'
    let displayString = $('#display').val();
    // Concatinates the digit or decimal clicked to the end of the display
    $('#display').val(`${displayString + $(this).text()}`);
}

function inputOperator(){
    // Assign the current display text to a string 'displayString'
    let displayString = $('#display').val();
    // Concatinates the digit or decimal clicked to the end of the display
    $('#display').val(`${displayString + $(this).text()}`);

    // Switch to set a string variable to the operation
    switch($(this).text()){
        case '+':
            operation = 'add';
            break;
        case '-':
            operation = 'subtract';
            break;
        case '*':
            operation = 'multiply';
            break;
        case '/':
            operation = 'divide';
    }
    // test operation variable
    console.log('operation:', operation);
}