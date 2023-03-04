$(document).ready(onReady);

 
function onReady(){
    console.log("JQuery loaded");

    // Listener for any button that needs to be displayed
    $('.number').on('click', inputDigit);
}

// function to display the number on the display
function inputDigit(){
    let displayString = $('#display').val();
    $('#display').val(`${displayString + $(this).text()}`);
}

