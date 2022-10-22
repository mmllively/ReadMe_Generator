// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

`;
}

module.exports = generateMarkdown;


class MarkDown {

  static renderLicenseBadge(license){
    const badges = {
        MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
        GNUGPLV3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
        ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
    }
    return badges[license];
  }

  static renderLicenseLink(license){
    const licenselinks = {
        MIT: "(https://opensource.org/licenses/MIT)",
        GNUGPLV3: "(https://www.gnu.org/licenses/gpl-3.0)",
        ISC: "(https://opensource.org/licenses/ISC)"
    }
    return licenselinks[license];
  }

  static renderLicenseSection(license) {
    if(license){
      return `Licensed under the ${this.renderLicenseLink(license)} license.`
    } else {
      return "";
    }
  }

  static generateReadme(answers){
      return `
# ${answers.title}

  ${this. renderLicenseBadge(answers.license)}

## Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [Installation](#Installation)
- [Contributions](#Contributions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.install}

## Contributions
${answers.contributers}

## Questions
${answers.email}
${answers.username}

## License
${this.renderLicenseSection(answers.license)}

    `
  }
}

module.exports = MarkDown