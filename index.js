// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./generateMarkdown');

function startProject(){
  inquirer
  // TODO: Create an array of questions for user input
  .prompt([

      {
          type: 'input',
          message: 'What is your Github username?',
          name: 'username',
        },
        {
          type: 'input',
          message: 'What is your email address?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'Please write a short description of your project?',
          name: 'description',
        },
        {
          type: 'input',
          message: 'What are the steps needed to install your project?',
          name: 'install',
        },
        {
          type: 'input',
          message: 'What does the user need to download the repo?',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'Who are your contributers?',
          name: 'contributers',
        },
        {
          type: 'list',
          message: 'What kind of license would you like to add to your project?',
          choices: [ "MIT", "GNUGPLV3", "ISC" ],
          name: 'license',
        },
      ])

  // TODO: Create a function to write README file
  // function writeToFile(fileName, data) {}

  // TODO: Create a function to initialize app
  // function init() {
      // return inquirer.prompt(questions)
      .then((answers)=> {
          
          const mark = MarkDown.generateReadme(answers);
          // const filename = `${answers.name}.json`;

          fs.writeFile('README.md', mark, (err) =>
          //if there is an error it will throw err, otherwhise it says Success
          err ? console.log(err) : console.log("Success")
            
          );


        
  }).catch((err) =>{
    if(err) {console.log(err)}
  })
}

startProject()
// };

// Function call to initialize app
// init();
