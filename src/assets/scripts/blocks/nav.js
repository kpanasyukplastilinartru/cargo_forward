// nav.js

// Nav

const nav = () => {

    const navs = document.querySelectorAll('.js-nav');
    if (!navs) return;

    navs.forEach((nav) => {

        const navItems = nav.querySelectorAll('.js-nav__item');

        navItems.forEach((navItem) => {

            const navButton = navItem.querySelector('.js-nav__button');
            if (!navButton) return;

            const navBody = navItem.querySelector('.js-nav__body');

            navButton.addEventListener('click', (event) => {
                event.preventDefault();
                navButton.classList.toggle('nav__button--active');
                navBody.classList.toggle('nav__body--active');
            });

        });

    });

};

nav();