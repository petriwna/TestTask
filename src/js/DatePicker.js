export class DatePicker {
    constructor() {
        this.datePickerFrom = document.querySelector('#datepicker-from');
        this.datePickerTo = document.querySelector('#datepicker-to');

        this.clearButtons = document.querySelectorAll('.close');
        this.openCalendarButtons = document.querySelectorAll('.calendar');

        this.customLocale = {
            weekdays: {
                shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            }
        };

        flatpickr.localize(this.customLocale);

        this.initDatePicker(this.datePickerFrom);
        this.initDatePicker(this.datePickerTo);
        this.addEventListeners();
    }

    initDatePicker(inputElement) {
        flatpickr(inputElement, {
            altInput: true,
            altFormat: "d_m_Y",
            prevArrow: '&lt;&lt;',
            nextArrow: '&gt;&gt;',
        });
    }

    addEventListeners() {
        this.clearButtons.forEach(button => {
            button.addEventListener('click', (event) => this.handleClickClearBtn(event));
        });

        this.openCalendarButtons.forEach(button => {
            button.addEventListener('click', (event) => this.handleClickOpenCalendarBtn(event));
        });
    }

    handleClickClearBtn(event) {
        const input = event.target.closest('.header__datepicker').querySelector('input');

        input._flatpickr.clear();
    }

    handleClickOpenCalendarBtn(event) {
        const input = event.target.closest('.header__datepicker').querySelector('input');

        input._flatpickr.toggle();
    }
}
