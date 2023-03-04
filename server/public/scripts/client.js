$(document).ready(onReady);

let operation;

function onReady(){
    console.log("JQuery loaded");

    // Listener for any button thats a digit 
    // or decimal that needs to be displayed
    $('.number').on('click', inputDigit);

    // Listener for any button thats an operator
    $('.operator').on('click', inputOperator);

    // Listener for the user to press the equals button
    // initiates POST
    $('#equals').on('click', postEquation);
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

// Send ajax POST request to server,
// data: equation and operation to perform
function postEquation(){
    console.log($('#display').val(), operation);
    $.ajax({
        method: 'POST',
        url: '/equation',
        data: {
            equation: $('#display').val(),
            operation: operation
        }
    }).then(response => {
        console.log('Recieved response for POST');
        getEquations();
    }).catch(response => {
        console.log("something went wrong");
    })
}

// Send ajax GET request to recieve allEquations
// from the server
function getEquations(){
    $.ajax({
        method: 'GET',
        url: '/equation'
    }).then(response => {
        console.log('GET - got a response from ther server',
        response);
        
    }).catch(response => {
        console.log('There was an error in GET');
    })
}