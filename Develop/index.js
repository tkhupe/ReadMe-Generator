// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    name:"projectTitle",
    message:"What is the project title?"
},
{
    type: "input",
    name:"description",
    message:"Write a brief description of the project:"
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation of the project:"
},
{
    type: "input",
    name: "usage",
    message: "Write a short description of how your project will be used:"
},
{
    type: "list",
    name: "license",
    message: "Add a license to your project",
    choices: [
        "Apache",
        "MIT License",
        "opensource.org/lic",
        "Mozilla Public License",
        "Academic",
        "ISC Foundation",
        "GNU"
    ]
},
{
    type: "input",
    name: "contributors",
    message: "List of contributors:"
},
{
    type: "input",
    name: "tests",
    message: "Are there any tests included?"
},
{
    type: "input",
    name: "questions",
    message: "What do I do to solve an issue?"
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username:"

},
{
    type: "input",
    name: "email",
    message: "Please enter your email address"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => {});

} 

// TODO: Create a function to initialize app
function init() {
   
    inquirer.prompt(questions)
    .then((answers) => {
        let data = generateMarkdown(answers);
        writeToFile(
            './README.md',data
        )
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();