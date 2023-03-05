const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = 5000;
const MAX_LENGTH = 10;

// Global variable to store every equation sent to the server
let allEquations = [];

// Send public files to the client
app.use(express.static('server/public'));
// Configure parser
app.use(parser.urlencoded({extended:true}))


// Run server
app.listen(PORT, () => {
    // test server runs
    console.log('Server is listening on port:', PORT);
})
// GET - /equation
app.get('/equation', (req, res) =>{
    console.log('inside server GET', allEquations);
    res.send(allEquations);
})
// POST - /equation
app.post('/equation', (req, res) => {
    let equation = req.body.equation;
    let operation = req.body.operation; 
    
    console.log('inside server POST', equation);
    // Push equation with result to allEquations array
    // if list is not full
    if(allEquations.length < MAX_LENGTH){
        allEquations.push(evaluate(equation, operation));
    }
    console.log('after push:', allEquations);
    // send confirmation status
    res.sendStatus(201);
})

// Evaluates the expression
function evaluate(equation, operation){
    let operands;
    let result;
    
    // determines arithmetic operation and returns equation and result
    switch(operation){
        // add
        case 'add':
            operands = equation.split('+');        
            result = Number(operands[0]) + Number(operands[1])
            console.log('in evaluate()', result, operation); 
            break;         
        // subtract
        case 'subtract':
            operands = equation.split('-');       
            result = Number(operands[0]) - Number(operands[1])
            break;
        // multiply
        case 'multiply':
            operands = equation.split('*');
            result = Number(operands[0]) * Number(operands[1])
            break;
        // divide
        case 'divide':
            operands = equation.split('/');
            // rounds to four decimal places if necessary
            result = Math.round(Number((operands[0]) / Number(operands[1]) * 10000)) / 10000;
    }
    return {equation, result};

}

