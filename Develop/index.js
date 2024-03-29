//Packages for application
const fs = require ('fs');
const inquirer = require ('inquirer');
const markdown = require (`./utils/generateMarkdown.js`)
//Questions to prompt user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Input the description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installing your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project.',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'State all project contributors.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select your project license',
        choices: [`MIT`, `LGPL-3.0`, `GPL-3.0`]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Explain a walkthrough for running any tests with your project.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter your Github username'
      },
];

//Function to create README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README File Generated!")
    });
}

//Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', markdown(answers)), (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
    });
};
// Function call to initialize app
init();
