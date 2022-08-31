

const search = document.querySelector('.js-search');
const searchButtonSubmit = search.querySelector('.js-search__button--submit');
const searchButtonReset = search.querySelector('.js-search__button--reset');

searchButtonSubmit.addEventListener('click', (event) => {
    if (searchButtonSubmit.type == 'button') {
        event.preventDefault();
        searchButtonSubmit.type = 'submit';
    }
    search.classList.add('search--active');
});

searchButtonReset.addEventListener('click', () => {
    searchButtonSubmit.type = 'button';
    search.classList.remove('search--active');
});