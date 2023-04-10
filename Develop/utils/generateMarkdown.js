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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
