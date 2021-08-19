const inquirer = require('inquirer');
const fs = require('fs');




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README




const generatemd = (answers) =>
`# TILE: <${answers.title}>
## By: ${answers.name}

#

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [Test Parameters](#tests)
6. [License](#license)
7. [Contact](#contact)
#

# Description
${answers.description}

# Installation
${answers.install}


# Usage
${answers.usage}


# Contributors
${answers.contributors}

# Tests
${answers.tests}

# License
${answers.license}

# Contact:

### My Email: ${answers.email}
### My GitHub username is ${answers.github}

### My LinkedIn: ${answers.linkedin}
`

// ## Installation
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
// ## Usage
// Provide instructions and examples for use. Include screenshots as needed.
// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    // ![alt text](assets/images/screenshot.png)
    
// ## Credits
// List your collaborators, if any, with links to their GitHub profiles.
// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
// If you followed tutorials, include links to those here as well.
// ## License
// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
// ---
// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
// ## Badges
// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
// ## Features
// If your project has a lot of features, list them here.
// ## How to Contribute
// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },

    //  
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },

    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation?',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'What is your usage?',
    },

    {
      type: 'checkbox',
      message: "Please select a License",
      name: "license",
      choices: ['Apache', 'MIT', 'GNU'],
    },



    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },




    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    

    {
      type: 'input',
      name: 'contribution',
      message: 'Enter your contributors',
    },

    // {
    //   type: 'input',
    //   name: 'tests',
    //   message: 'Enter your tests?????',
    // },



    
  ])
  .then((answers) => {
    const readMePageContent = generateHTML(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log(' OK!   Successfully created README.md !')
    );
  });
