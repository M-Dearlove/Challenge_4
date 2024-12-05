//:://////////////////////////////////
//:: Created by: Matt Dearlove
//:: Created on: 12/5/24
//:: Submitted on 12/5/24
//:://////////////////////////////////

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None'){
    return ``
  } else if (license == 'MIT'){
    return `![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == 'GPLv2'){
    return `![License: ${license}](https://img.shields.io/badge/License-GPL_v2-yellow.svg)`
  } else {
    return `![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-yellow.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){
    return `[Link](https://opensource.org/license/MIT)`
  } else if (license == 'GPLv2'){
    return `[Link}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license == 'Apache2.0'){
    return `[Link](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `${badge} 
  \n ${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseSection(data.license)}

  ## Table-Of-Contents
  * [Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Instructions](#usage)
  * [Contribution Guidelines](#contributing)
  * [Test Instructions](#tests)
  * [License Information](#license)
  * [Questions?](#questions)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.instructions}
  ## Usage:
  ${data.usage}
  ## Contributing:
  ${data.contribution}
  ## Tests:
  ${data.test}
  ## License:
  This project is covered by the ${data.license} license
  ## Questions:
  * View my GitHub at: [${data.github}](https://github.com/${data.github})
  * E-mail me at: [${data.email}](mailto:${data.email})
  ## Video:
  View a demonstration of my project at: (https://app.screencastify.com/v3/watch/Q4rtqEsNZRkooIXaMegT)
`;
}

export default generateMarkdown;