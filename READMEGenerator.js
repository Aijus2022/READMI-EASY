// Function to generate README content
function generateREADME(answers) {
    return `
# ${answers.title}

## Description

${answers.description}

## Motivation

${answers.motivation}

## Why Build

${answers.whyBuild}

## Problem Solved

${answers.problemSolved}

## Repository URL

[${answers.repository}](${answers.repository})

## Screenshots

![Screenshot 1](${answers.screenshot1})
![Screenshot 2](${answers.screenshot2})

## Author

- Name: ${answers.author}
- GitHub: [${answers.github}](https://github.com/${answers.github})

## License

${answers.license}


## Testing Instructions

${answers.testing}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Website

[${answers.website}](${answers.website})

## Contributing

${answers.contributing}
`;
}

module.exports = generateREADME;
