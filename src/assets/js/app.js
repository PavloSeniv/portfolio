import * as functionsIsWebp from "./modules/_webp_add_class_to_html.js";
// import * as functionsFilterBadWords from "./modules/filter in form to bad words.js";
//

functionsIsWebp.isWebp();
// functionsFilterBadWords.filterBadWords()

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
    '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.classList.add('header__sm-menu--active')
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    } else {
        headerHamMenuBtn.classList.add('d-none')
        headerHamMenuCloseBtn.classList.remove('d-none')
    }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active')
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
    location.href = 'index.html'
})

import Filter from 'bad-words';

// Ініціалізація фільтра
const filter = new Filter();

// Додавання слухача подій до форми
document.getElementById('myForm').addEventListener('submit', function (event) {
    const textInput = document.getElementById('message').value;

    if (filter.isProfane(textInput)) {
        event.preventDefault(); // Зупинити відправлення форми
        alert('Ваша форма містить нецензурні слова. Будь ласка, виправте це.');
    }
});