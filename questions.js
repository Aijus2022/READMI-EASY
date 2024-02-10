// questions.js

// Array of questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "Please enter a short description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What motivated you to build this project?",
    name: "motivation",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "whyBuild",
  },
  {
    type: "input",
    message: "What problem does your project solve?",
    name: "problemSolved",
  },
  {
    type: "input",
    message: "What is the repository URL of your project?",
    name: "repository",
  },
  {
    type: "input",
    message: "Please provide the URL of the first screenshot:",
    name: "screenshot1",
  },
  {
    type: "input",
    message: "Please provide the URL of the second screenshot:",
    name: "screenshot2",
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license for your project:",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU GPLv3",
      "ISC License",
      "None",
    ],
  },
  
  {
    type: "input",
    name: "testing",
    message: "What are the testing protocols for your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How should users use your project?",
  },
  {
    type: "input",
    name: "website",
    message: "What is the URL of your project's website?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",   
  },
];


module.exports = questions;
