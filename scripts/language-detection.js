document.addEventListener("DOMContentLoaded", function() {
    const userLang = navigator.language || navigator.userLanguage;

    const englishElements = document.querySelectorAll('.en');
    const frenchElements = document.querySelectorAll('.fr');

    if (userLang.startsWith('fr')) {
        englishElements.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        frenchElements.forEach(element => {
            element.style.display = 'none';
        });
    }
});
