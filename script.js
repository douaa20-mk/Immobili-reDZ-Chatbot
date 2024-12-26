const chatToggle = document.querySelector('.chatbot-header');
const chatbotContainer = document.querySelector('.chatbot-container');
const preferencesDropdown = document.getElementById('preferences');
const settingsDropdown = document.getElementById('settings');
const contactDropdown = document.getElementById('contact');
chatToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle ('active'); // Toggles visibility
});

function togglePreferences() {
    preferencesDropdown.classList.toggle('active'); // Toggles preferences dropdown
}
function toggleContact() {
    contactDropdown.classList.toggle('active'); // Toggles contact dropdown
}

function toggleSettings() {
    settingsDropdown.classList.toggle('active'); // Toggles settings dropdown
}
const translations = {
    en: {
        welcomeMessage: "Welcome to your dream home finder!",
        recentRentals: "Recent Rentals",
        chatHeader: "ImmobiliéreDZ Chatbot",
        aboutTitle: "About Us",
        aboutContent: "We are a real estate agency committed to helping you find your dream home.",
        contactTitle: "Contact Us",
        contactEmail: "Email: contact@immobiliereDZ.com",
        contactPhone: "Phone: +213 123 456 789",
    },
    fr: {
        welcomeMessage: "Bienvenue à votre service de recherche de maison de rêve!",
        recentRentals: "Locations Récentes",
        chatHeader: "Chatbot ImmobiliéreDZ",
        aboutTitle: "À Propos de Nous",
        aboutContent: "Nous sommes une agence immobilière engagée à vous aider à trouver la maison de vos rêves.",
        contactTitle: "Contactez-Nous",
        contactEmail: "Email : contact@immobiliereDZ.com",
        contactPhone: "Téléphone : +213 123 456 789",
    },
    ar: {
        welcomeMessage: "مرحبًا بك في أداة البحث عن منزل أحلامك!",
        recentRentals: "الإيجارات الحديثة",
        chatHeader: "روبوت الدردشة ImmobiliéreDZ",
        aboutTitle: "معلومات عنا",
        aboutContent: "نحن وكالة عقارية ملتزمة بمساعدتك في العثور على منزل أحلامك.",
        contactTitle: "اتصل بنا",
        contactEmail: "البريد الإلكتروني: contact@immobiliereDZ.com",
        contactPhone: "الهاتف: +213 123 456 789",
    }
};

// Function to change the page content based on selected language
function changeLanguage(lang) {
    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', lang);
    console.log(translations[lang]); 
    // Update all translatable elements dynamically
    document.querySelector('.diaporama .overlay p').textContent = translations[lang].welcomeMessage;
    document.querySelector('.opportunities .left-panel h2').textContent = translations[lang].recentRentals;
    document.querySelector('.opportunities .right-panel h2').textContent = translations[lang].chatHeader;
    document.querySelector('.about h2').textContent = translations[lang].aboutTitle;
    document.querySelector('.about p').textContent = translations[lang].aboutContent;
    document.querySelector('.contact h2').textContent = translations[lang].contactTitle;
    document.querySelector('.contact p:nth-child(2)').innerHTML = `<a href="mailto:contact@immobiliereDZ.com">${translations[lang].contactEmail}</a>`;
    document.querySelector('.contact p:nth-child(3)').innerHTML = `<a href="tel:+213123456789">${translations[lang].contactPhone}</a>`;
}

// Function to handle the page load and apply the saved language
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en'; // Load saved language or default to 'en'
    changeLanguage(savedLanguage); // Apply the saved or default language
});



function navigateTo(section) {
    if (section === 'about') {
        window.location.href = 'about.html'; // Redirect to about page
    }
     else if (section === 'home') {
    window.location.href = 'index.html'; // Redirect to Home page
    }
}

function showRentalDetails(rentalId) {
    // Logic to show rental details in a modal or new section
    alert(`Showing details for ${rentalId}`);
}

function toggleChat() {
    chatbotContainer.classList.toggle('active'); // Toggles chatbot visibility
}
