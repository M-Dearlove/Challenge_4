//:://////////////////////////////////
//:: Created by: Matt Dearlove
//:: Created on: 12/5/24
//:: Submitted on 12/5/24
//:://////////////////////////////////

// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                validate: input => input.length > 0 ? true: 'Please enter a title'
            },
            {
                type: 'input',
                name: 'description',
                message: 'How do you describe your project?',
                validate: input => input.length > 0 ? true: 'Please enter a description.'
            },
            {
                type: 'input',
                name: 'instructions',
                message: 'How do you install your project?',
                validate: input => input.length > 0 ? true: 'Please enter installation instructions.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use your project?',
                validate: input => input.length > 0 ? true: 'Please enter usage information.'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'How do you contribute to your project?',
                validate: input => input.length > 0 ? true: 'Please enter contribution information.'
            },
            {
                type: 'input',
                name: 'test',
                message: 'How do you test your project',
                validate: input => input.length > 0 ? true: 'Please enter test instructions.'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project',
                choices: [{name: 'MIT', value: 'MIT'}, {name: 'GPLv2', value: 'GPLv2'}, {name: 'Apacha 2.0', value: 'Apache2.0'}, {name: 'None', value: ''}]
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username.',
                validate: input => input.length > 0 ? true: 'Please enter your GitHub Username.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your E-mail address',
                validate: input => input.length > 0 ? true: 'Please enter your e-mail address.'
            }
];           

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('READDME.md has been generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(generateMarkdown(answers));
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();