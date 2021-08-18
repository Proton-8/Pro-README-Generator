// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if(license.toLowerCase() === "mit") return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  if(license.toLowerCase() === "apache") return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  if(license.toLowerCase() === "gnu") return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
   return "";


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.toLowerCase() === "mit") return "https://opensource.org/licenses/MIT";
  if(license.toLowerCase() === "apache") return 'https://opensource.org/licenses/Apache-2.0';
  if(license.toLowerCase() === "gnu") return 'https://www.gnu.org/licenses/gpl-3.0';
    return "";


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// ??????????????   not sure here
function renderLicenseSection(license) {



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
