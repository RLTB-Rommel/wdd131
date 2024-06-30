// Get the current year and set it to the span with id "currentyear"
function setCurrentYear() {
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Get the last modified date and set it to the paragraph with id "lastModified"
function setLastModified() {
    const lastModifiedParagraph = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;
}

// Calculate wind chill based on temperature (°C) and wind speed (km/h)
function calculateWindChill(temperature, windSpeed) {
    const windChill = (temperature <= 10 && windSpeed > 4.8) ?
                      Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) :
                      'N/A';
    return windChill;
}

// Display wind chill on page load
window.addEventListener('load', () => {
    const temperature = 30; // Example temperature in °C
    const windSpeed = 15;   // Example wind speed in km/h
    const windChillElement = document.getElementById('windChill');
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    setCurrentYear();
    setLastModified();
});