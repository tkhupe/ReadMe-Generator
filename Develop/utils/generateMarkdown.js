// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache") return `![badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)<br />`;
    if (license === "MIT License") return `![badge](https://img.shields.io/badge/License-MIT-yellow.svg)<br />`;
    if (license === "Open Data Commons License") return `![badge](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)<br />`;
    if (license === "Mozilla Public License") return `![badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)<br />`;
    if (license === "GNU") return `![badge](https://img.shields.io/badge/License-GPLv3-blue.svg)<br />`;
    if (license ===  "ISC Foundation") return `![badge](https://img.shields.io/badge/License-ISC-blue.svg)<br />`;
    if (license === "") return '';
    
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") return '(https://opensource.org/licenses/Apache-2.0)';
  if (license === "MIT License") return '(https://opensource.org/licenses/MIT)';
  if (license === "Open Data Commons License") return '(https://opendatacommons.org/licenses/by/)';
  if (license === "Mozilla Public License") return '(https://opensource.org/licenses/MPL-2.0)';
  if (license === "GNU") return 'https://www.gnu.org/licenses/gpl-3.0)';
  if (license ===  "ISC Foundation") return '(https://opensource.org/licenses/ISC)';
  if (license === "") return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `  
  ## License
  ${renderLicenseBadge(license)}
  <br />
  ${renderLicenseLink(license)}

  This application is covered by the ${license} license. 
  `;
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.projectTitle}</h1>
  
  ${renderLicenseBadge(data.license)}
  
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ✏️ ${data.tests}
  
  ## Questions
  ${data.questions}<br />
  <br />
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />`;
    }
module.exports = generateMarkdown;
