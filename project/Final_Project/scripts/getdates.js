// getdates.js

// Get the current year and set it to the span with id "currentyear"
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Get the last modified date and set it to the paragraph with id "lastModified"
const lastModifiedParagraph = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;