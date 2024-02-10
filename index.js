const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const generateREADME = require('./READMEGenerator');

// Function to prompt user with questions
function promptUser() {
    inquirer.prompt(questions).then(answers => {
        const READMEContent = generateREADME(answers);
        fs.writeFile('README.md', READMEContent, err => {
            if (err) {
                console.error('Error writing to README.md:', err);
            } else {
                console.log('README.md generated successfully!');
            }
        });
    });
}

// Call promptUser function to start the process
promptUser();
