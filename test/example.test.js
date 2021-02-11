// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, sub, mul, div } from '../utilities.js';

const test = QUnit.test;

test('add two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const sum = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('subtract two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const min = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = sub(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, min);
});

test('multiply two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const product = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = mul(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, product);
});

test('divide two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const quotient = .75;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = div(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, quotient);
});