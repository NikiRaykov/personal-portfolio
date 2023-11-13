function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open"); 
}

function initTranslation() {
    // Set the default language
    var defaultLanguage = 'en';

    // Check if there is a language specified in the URL
    var urlParams = new URLSearchParams(window.location.search);
    var urlLanguage = urlParams.get('lang');

    // Use the language from the URL if available, otherwise use the default language
    var initialLanguage = urlLanguage || defaultLanguage;

    // Change the language to the initial language
    changeLanguage(initialLanguage);
}

function changeLanguage(languageCode) {
    /* Select all elements with date attributes for the specified attributes */
    $('[data-en], [data-de]').each(function () {
        var element = $(this);
        var text = element.data(languageCode); // Get the text for the specified language
        if (text) {
            element.text(text); // Update the text content
        }
    }); 
}

// Initialize translation when the document is ready
$(document).ready(function () {
    initTranslation();
});

// Add click event listeners to language buttons
$('#language-selector button').on('click', function () {
    var languageCode = $(this).text().toLowerCase();
    changeLanguage(languageCode);
 });