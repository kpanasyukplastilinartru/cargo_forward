// menu.js

// Menu

const menu = document.querySelector('.js-menu');
const menuBlock = menu.querySelector('.js-menu__block');
const menuContent = menu.querySelector('.js-menu__content');
const menuButtons = menu.querySelectorAll('.js-menu__button');

const toggleMenu = () => {
    for (const menuButton of menuButtons) {
        menuButton.classList.toggle('menu__button--active');
    }
    menuBlock.classList.toggle('menu__block--active'); 
};


for (const menuButton of menuButtons) {
    menuButton.addEventListener('click', () => {
        toggleMenu();
    });
}

menuBlock.addEventListener('click', (event) => {
    if (event.target.closest('.js-menu__block') && !event.target.closest('.js-menu__content') && !event.target.classList.contains('.js-menu__button') ) {
        toggleMenu();
    }
});


