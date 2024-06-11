function init() {
    const elemFrom = document.getElementById('datepicker-from');
    const elemTo = document.getElementById('datepicker-to');

    const customLocale = {
        weekdays: {
            shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    };

    flatpickr.localize(customLocale);

    flatpickr(elemFrom, {
        altInput: true,
        altFormat: "d_m_Y",
        prevArrow: '&lt;&lt;',
        nextArrow: '&gt;&gt;',
    });

    flatpickr(elemTo, {
        altInput: true,
        altFormat: "d_m_Y",
        prevArrow: '&lt;&lt;',
        nextArrow: '&gt;&gt;',
    });

    const toggleButtons = document.querySelectorAll('.calendar');
    toggleButtons.forEach((el) => {
        el.addEventListener('click', (event) => {
            const input = event.target.closest('.header__datepicker').querySelector('input');

            input._flatpickr.toggle();
        });
    });

    const clearButtons = document.querySelectorAll('.close');
    clearButtons.forEach((el) => {
        el.addEventListener('click', () => {
            const input = event.target.closest('.header__datepicker').querySelector('input');

            input._flatpickr.clear();
        });
    });


    const listType = document.querySelector('.row');
    const blockType = document.querySelector('.grid');
    const list = document.querySelector('.content-section__list-row');
    const grid = document.querySelector('.content-section__list-grid');

    grid.classList.add('visually-hidden');
    listType.classList.add('icon-btn--active');

    listType.addEventListener('click', () => {
        list.classList.remove('visually-hidden');
        grid.classList.add('visually-hidden');
        blockType.classList.remove('icon-btn--active');
        listType.classList.add('icon-btn--active');
    });

    blockType.addEventListener('click', () => {
        grid.classList.remove('visually-hidden');
        list.classList.add('visually-hidden');
        listType.classList.remove('icon-btn--active');
        blockType.classList.add('icon-btn--active');
    });
}

document.addEventListener('DOMContentLoaded', init)
