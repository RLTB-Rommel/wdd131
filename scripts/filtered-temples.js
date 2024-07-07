// Array of temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September 25",
        area: 26683,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-993617-wallpaper.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "Seoul, Korea",
        dedicated: "1985, December 14",
        area: 28057,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
        templeName: "Kona Hawaii",
        location: "Kona, Hawaii, United States",
        dedicated: "2000, January 23",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kona-hawaii/400x250/kona-hawaii-mormon-temple-941461-wallpaper.jpg"
    }
];

// Function to generate temple cards
function generateTempleCards(templeList) {
    const gallery = document.getElementById('temple-gallery');
    gallery.innerHTML = ''; // Clear existing content

    templeList.forEach(temple => {
        const figure = document.createElement('figure');
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy'; // native lazy loading
        figure.appendChild(img);
        
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = temple.templeName;
        figure.appendChild(figcaption);
        
        gallery.appendChild(figure);
    });
}

// Function to filter and display temples based on category
function filterAndDisplay(category) {
    let filteredTemples = [];

    switch (category) {
        case 'Old':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'Home':
        default:
            filteredTemples = temples;
            break;
    }

    generateTempleCards(filteredTemples);
}

// Event listeners for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initial load, show all temples
    filterAndDisplay('Home');

    // Navigation links
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        filterAndDisplay('Home');
    });

    document.getElementById('old-link').addEventListener('click', function(e) {
        e.preventDefault();
        filterAndDisplay('Old');
    });

    document.getElementById('new-link').addEventListener('click', function(e) {
        e.preventDefault();
        filterAndDisplay('New');
    });

    document.getElementById('large-link').addEventListener('click', function(e) {
        e.preventDefault();
        filterAndDisplay('Large');
    });

    document.getElementById('small-link').addEventListener('click', function(e) {
        e.preventDefault();
        filterAndDisplay('Small');
    });
});