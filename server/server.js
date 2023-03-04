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
    // test req.body
    console.log('Recieved the equation from client', req.body);
    let equation = req.body.equation;
    let operation = req.body.operation;
    // test variables
    console.log(equation, operation);
    
    allEquations.push(evaluate(equation, operation));
    console.log('allEquations after push:', allEquations);

    // send confirmation status
    res.sendStatus(201);
})

function evaluate(equation, operation){
    // test evaluate
    console.log('in evaluate()');
    let operands;
    
    switch(operation){
        case 'add':
            operands = equation.split('+');
            //console.log('result of evaluation', result);
            return {
                equation: equation,
                result: Number(operands[0]) + Number(operands[1])
            };
            case 'subtract':
            operands = equation.split('-');
            //console.log('result of evaluation', result);
            return {
                equation: equation,
                result: Number(operands[0]) - Number(operands[1])
            };
            case 'multiply':
            operands = equation.split('*');
            //console.log('result of evaluation', result);
            return {
                equation: equation,
                result: Number(operands[0]) * Number(operands[1])
            };
            case 'divide':
            operands = equation.split('/');
            //console.log('result of evaluation', result);
            return {
                equation: equation,
                result: Number(operands[0]) / Number(operands[1])
            };
    }

}

