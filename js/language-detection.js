document.addEventListener("DOMContentLoaded", function() {
    const userLang = navigator.language || navigator.userLanguage;
    const storedLang = localStorage.getItem('preferredLanguage');

    const englishElements = document.querySelectorAll('.en');
    const frenchElements = document.querySelectorAll('.fr');

    function toggleLanguage(lang) {
        if (lang === 'fr') {
            englishElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            frenchElements.forEach(element => {
                element.style.display = 'none';
            });
        }
    }

    // Use stored language preference if it exists, otherwise use browser language
    const preferredLanguage = storedLang || (userLang.startsWith('fr') ? 'fr' : 'en');
    toggleLanguage(preferredLanguage);

    // Add event listeners to buttons
    document.getElementById('btn-en').addEventListener('click', function() {
        localStorage.setItem('preferredLanguage', 'en');
        location.reload();
    });

    document.getElementById('btn-fr').addEventListener('click', function() {
        localStorage.setItem('preferredLanguage', 'fr');
        location.reload();
    });
});
