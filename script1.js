const cafes = {
    "Vaffel kohvik": {
        name: "Vaffel kohvik",
        description: "Description for Vaffel kohvik.",
        image: "Vahvel-1.jpeg",
        menu: "Menüü leiate kohviku kodulehelt",
        openingHours: " esmaspäev suletud <br> teisipäev-reede 11-20 <br> laupäev 9-20 <br> pühapäev 9-19",
        phone: "5 888 3838",
        homepage: " https://vaffel.ee/en",
        instagram: "https://www.instagram.com/kohvik_vaffel/"
    },
    "Dirhami kalakohvik": {
        name: "Dirhami kalakohvik",
        description: "Description for Dirhami kalakohvik.",
        image: "Dirham_2.jpg",
        menu: "Menüü muutub neil iga nädal, mõinkord isegi iga päev.",
        openingHours: "Ettebronneerimine",
        phone: "5 177 899",
        homepage: "https://www.dirhami.ee/kalakohvik/"
        
    },
    "LAUT resto": {
        name: "LAUT resto",
        description: "Description for LAUT resto.",
        image: "LAUT_2.jpg",
        menu: "Näidis menüü kodulehel.",
        openingHours: "Ettebronneerimine",
        phone: "5222693",
        homepage: "https://laut.ee/",
        instagram: "https://www.instagram.com/lautresto/"
    },
    "Emmaste teemaja": {
        name: "Emmaste teemaja",
        description: "Description for LAUT resto.",
        image: "emmaste-teemaja_3.jpg",
        menu: "Menüüst kilde võin näha teemaja instagrammis.",
        openingHours: "Avatud igapäevaselt <br> 11:00-17:00",
        phone: "5 342 3957",
        instagram: "https://www.instagram.com/emmaste_teemaja/"
    },

    "Rooslaiu farmi kohvik": {
        name: "Rooslaiu farmi kohvik",
        description: "Description for LAUT resto.",
        image: "Roosilaiu_2.webp",
        menu: "Menüü leiate kodulehelt.",
        openingHours:"01.06.23-31.08.23 <br> 09:00 - 17:00 <br> 01.09.23-31.05.24 <br> Ainult ettetellimisel.",
        phone: "5 164 923",
        homepage: "https://rooslaiutalukihnus.mystrikingly.com/",
        instagram: "https://www.instagram.com/rooslaiutalukihnus/"
    },
    "Eastern Outback kohvik": {
        name: "Eastern Outback kohvik",
        description: "Description for LAUT resto.",
        image: "Outback_1.jpg",
        menu: "Menüüga saate tutvuda kohapeal.",
        openingHours: "esmaspäev-neljapäev 11-16 <br> reede 11-19 <br> laupäev-pühapäev Kinni",
        phone: "5 559 0913",
       
    },
    "Rannaresto": {
        name: "Rannaresto",
        description: "Description for LAUT resto.",
        image: "rannaresto-1.jpg",
        menu: "Menüü leiate kodulehelt.",
        openingHours: "esmaspäev-neljapäev, pühapäev 11:00 - 22:00 <br> reede-laupäev: 11:00 - 01:00",
        phone: "5 907 2255",
        homepage: "https://ranna-resto.ee/"
        
    },
    "Kapteni Farmi kalakohvik": {
        name: "Kapteni Farmi kalakohvik",
        description: "Description for LAUT resto.",
        image: "kapten_1.jpg",
        menu: "Menüüga saate tutvuda kodulehel.",
        openingHours: "26.06.23-31.08.23 <br> esmaspäev-pühapäev 12:00 - 21:00 <br> 01.09.23-30.04.24 <br> Ainult ettetellimisel",
        phone: "5 134 683",
        homepage: "https://kapteni.eu/",
        instagram: "https://www.instagram.com/explore/locations/714932041/kapteni-talu/"
    },
    "Kohvik Lohvik": {
        name: "Kohvik Lohvik",
        description: "Description for LAUT resto.",
        image: "Lohvik_1.jpg",
        menu: "Menüüga saate tutvuda instagrammis.",
        openingHours: "Avatud 01.05 - 30.09 igapäevaselt: 10:00 - 20:00",
        phone: "5 567 1598",
        instagram: "https://www.instagram.com/kohviklohvik/"
    },
    "Pilguse Mõisa resto": {
        name: "Pilguse Mõisa resto",
        description: "Description for LAUT resto.",
        image: "Pilguse_2.jpg",
        menu: "Menüüga saate tutvuda kodulehel.",
        openingHours:"01.05-30.08 <br>esmaspäev-neljapäev, pühapäev 12:00 - 21:30 <br>reede-laupäev: 12:00 - 22:00 <br>01.05-01.11 <br>Avatud ainult ettetellimisel", 
        phone: "454 5445",
        homepage: "https://pilguse.com/",
        instagram: "https://www.instagram.com/pilguseresidency/?hl=en"
    },
    "Roheline Maja kohvik ja pood": {
        name: "Roheline Maja kohvik ja pood",
        description: "Description for LAUT resto.",
        image: "Roheline_maja_3.jpg",
        menu: "Menüüga tutvuda kodulehel.",
        openingHours:"teisipäev-reede: 09:00 - 17:00 <br>laupäev 09:00 - 18:00<br>pühapäev 10:00 - 16:00<br>esmaspäev suletud",
        phone: "434 4307",
        homepage: "https://visitsouthestonia.com/metsasttaldrikule/rohelise-maja-kohvik/"

    },"Cruffin Bread Factory": {
        name: "Cruffin Bread Factory",
        description: "Description for LAUT resto.",
        image: "Cruffin_3.jpeg",
        menu: "Menüüga saate tutvuda kodulehel.",
        openingHours: "esmaspäev-pühapäev 10-18",  
        phone: "5 617 1021",
        homepage: "https://cruffin.ee/",
        instagram: "https://www.instagram.com/cruffinsaiatehas"
    },
    
};

function openPopup() {
    const selectedCafe = document.getElementById('söögikoht').value;
    const popupContent = cafes[selectedCafe];

    const popup = document.getElementById('popup');
    const popupContentDiv = document.getElementById('popup-content');
    
    // Start building the HTML content
    let htmlContent = `<h2>${popupContent.name}</h2>`;
    htmlContent += `<img src="${popupContent.image}" alt="${popupContent.name}" class="cafe-image">`;
    htmlContent += `<h3>Menüü</h3><p>${popupContent.menu}</p>`;
    htmlContent += `<h3>Lahtiolekuajad</h3><p>${popupContent.openingHours}</p>`;
    htmlContent += `<p>📞 ${popupContent.phone}</p>`;

    // Conditionally include the homepage link
    if (popupContent.homepage) {
        htmlContent += `<p>🌐 <a href="${popupContent.homepage}" target="_blank">Koduleht</a></p>`;
    }

    // Conditionally include the Instagram link
    if (popupContent.instagram) {
        htmlContent += `<p>📷 <a href="${popupContent.instagram}" target="_blank">Instagram</a></p>`;
    }

    // Set the HTML content to the popup
    popupContentDiv.innerHTML = htmlContent;
    popup.style.display = 'block';
}
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


console.log('Script1.js is loaded and executed.');