function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Array of solarplants
    const solarplants = [
        {
            solarplantname: "Badhla Solar Park",
            location: "Bhadlachuhron Ki, Rajasthan, India",
            dedicated: "2020, March 20",
            area: 21.88,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYHAOePc6vzjJV-JMw88Bz8qAiR_aJnfdtg&s"
        },
        {
            solarplantname: "Golmud Desert",
            location: "Golmud, Qinghai Province, China",
            dedicated: "2013, September 4",
            area: 1,
            imageUrl:"https://news.loomsolar.com/wp-content/uploads/2021/02/Golmud-Desert-Solar-Park-edited-300x169.jpg"
        },
        {
            solarplantname: "Pavagada Taluk",
            location: "Tumkur district, Karnataka, India",
            dedicated: "2018, March 6",
            area: 20.31,
            imageUrl:"https://news.loomsolar.com/wp-content/uploads/2021/02/Pavagada-Solar-Park-edited-300x169.jpg"
        },
        {
            solarplantname: "Delingha Molten Salt Tower",
            location: "Delingha City, Haixi AP, Qinghai, China.",
            dedicated: "2022, September 21",
            area: 0.13,
            imageUrl: "https://news.loomsolar.com/wp-content/uploads/2021/02/Delingha-Solar-Park-edited-300x169.jpg"
        },
        {
            solarplantname: "Jinchuan Solar Park",
            location: "Gansu, China",
            dedicated: "2013, November, 19",
            area: 9.85,
            imageUrl:"https://news.loomsolar.com/wp-content/uploads/2021/02/Jinchuan-Solar-Park-by-wiki-solar-edited-300x169.png"
        },
        {
            solarplantname: "Kunta Ultra Mega Solar Park",
            location: "Andhra Pradesh, India",
            dedicated: "2016, July, 29",
            area: 12,
            imageUrl: "https://news.loomsolar.com/wp-content/uploads/2021/02/Ananthapuram-Ultra-Mega-Solar-Park-edited-300x169.jpg"
        },
        {
            solarplantname: "Rewa Ultra Mega Solar Park",
            location: "Rewa district, Madhya Pradesh",
            dedicated: "2020, January, 3",
            area: 6.14,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttVxuAK7hvB3WrEoYSrlsL5F17G2nKbSlfg&s"
        },
        {
            solarplantname: "Kurnool Ultra",
            location: "Andhra Pradesh, India",
            dedicated: "2019, January 8",
            area: 9.3,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxZ84MBBgp7ISZj5hIFQJRfkLr51RNMONyQ&s"
        },
        
    ];

    // Function to generate solarplant cards
    function generateSolarplantCards(solarplantList) {
        const gallery = document.getElementById('solarplant-gallery');
        gallery.innerHTML = ''; // Clear existing content

        solarplantList.forEach(solarplant => {
            const figure = document.createElement('figure');
            
            const img = document.createElement('img');
            img.src = solarplant.imageUrl;
            img.alt = solarplant.solarplantname;
            img.loading = 'lazy'; // native lazy loading
            figure.appendChild(img);
            
            const figcaption = document.createElement('figcaption');
            figcaption.textContent = solarplant.solarplantname;
            figure.appendChild(figcaption);
            
            gallery.appendChild(figure);
        });
    }

    // Function to filter and display solarplants based on category
    function filterAndDisplay(category) {
        let filteredSolarplants = [];

        switch (category) {
            case 'Old':
                filteredSolarplants = solarplants.filter(solarplant => parseInt(solarplant.dedicated.split(',')[0]) < 2020);
                break;
            case 'New':
                filteredSolarplants = solarplants.filter(solarplant => parseInt(solarplant.dedicated.split(',')[0]) > 2020);
                break;
            case 'Large':
                filteredSolarplants = solarplants.filter(solarplant => solarplant.area > 10);
                break;
            case 'Small':
                filteredSolarplants = solarplants.filter(solarplant => solarplant.area < 10);
                break;
            case 'All':
            default:
                filteredSolarplants = solarplants;
                break;
        }

        generateSolarplantCards(filteredSolarplants);
    }

    // Event listener for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim(); // Get text content of clicked link
            filterAndDisplay(category);
        });
    });

    // Initial load, show all solarplants
    filterAndDisplay('All');
});


