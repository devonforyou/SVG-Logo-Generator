const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

async function userInput() {
    const questions = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters for your logo: ',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color or hexidecimal number for the text color: ',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape: ',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color or hexidecimal number for the shape color: '
        }
    ]);
    return questions;
    }

async function generateLogo() {
    const userInput = await userInput();
    const {text, textColor, shape, shapeColor } = questions;

    const chosenShape = new(eval(shape))();
    chosenShape.setColor(shapeColor);

    let x,y;

    if (shape === 'Triangle') {
        x = 150; 
        y = 125; 
      } else if (shape === 'Circle') {
        x = 150; 
        y = 100; 
      } else if (shape === 'Square') {
        x = 125; 
        y = 100; 
      };

      const logo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render()}
      <text x="${x}" y="${y}" font-family="Calibri" font-weight="bold" font-size="24" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', logo);
  console.log('SVG logo created');
}

generateLogo();