//returns license badge
function renderLicenseBadge(license) {
  if (!license) {
    return ('')
  } else if (license === `MIT`) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === `LGPL-3.0`) {
   return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === `GPL-3.0`) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
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
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
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
  "For any questions, please contact my github account at:"
    [${data.questions}](https://github.com/${data.questions}/)
`;
}

module.exports = generateMarkdown;
