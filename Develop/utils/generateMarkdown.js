//returns license badge
function renderLicenseBadge(license) {
  if (!license) {
    return ('')
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
}

//returns license link 
function renderLicenseLink(license) {
  if (!license) {
    return ('')
  } else {
    return `https://opensource.org/license/${license}/`
    }
  }

//returns license statement of README
function renderLicenseSection(license) {
  if (!license) {
    return ('')
  } else {
    return `this project is ${license} licensed.`
  }
}

//function to create markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Description
    ${data.description}
  ## Table of Contents
    * Description (#description)
    * Installation (#installation)
    * Usage (#usage)
    * License (#license)
    * Contributing (#contributing)
    * Tests (#tests)
    * Questions (#questions)
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## License 
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
  ## Contributing 
    ${data.contribute}
  ## Tests 
    ${data.tests}
## Questions 
    ${data.questions}   
`;
}

module.exports = generateMarkdown;
