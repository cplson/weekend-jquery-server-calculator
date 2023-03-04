const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = 8000;

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
    res.send(allEquations);
})
// POST - /equation
app.post('/equation', (req, res) => {
    let equation = req.body.equation;
    let operation = req.body.operation; 
    
    // Push equation with result to allEquations array
    allEquations.push(evaluate(equation, operation));

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
        // subtract
        case 'subtract':
            operands = equation.split('-');       
            result = Number(operands[0]) - Number(operands[1])
        // multiply
        case 'multiply':
            operands = equation.split('*');
            result = Number(operands[0]) * Number(operands[1])
            
        // divide
        case 'divide':
            operands = equation.split('/');
            result = Number(operands[0]) / Number(operands[1])
    }
    return result;

}

