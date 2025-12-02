// Script to dynamically update the current year and last modified date in the footer
const currentYearElement = document.getElementById('currentyear');

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the current year element
currentYearElement.textContent = currentYear;

// Get the last modified date and update the corresponding element
const lastModifiedElement = document.getElementById('lastModified');

// Get the last modified date of the document
const lastModified = document.lastModified;

// Update the content of the last modified element
lastModifiedElement.textContent = `Last Modification: ${lastModified}`;