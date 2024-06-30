// temples.js

// getdates.js

// Get the current year and set it to the span with id "currentyear"
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Get the last modified date and set it to the paragraph with id "lastModified"
const lastModifiedParagraph = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;

// Toggle mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Call functions
setCurrentYear();
setLastModified();