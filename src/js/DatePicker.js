import AirDatepicker from "air-datepicker";
import en from "air-datepicker/locale/en";

export class DatePicker {
    constructor() {
        this.datePickerFrom = document.querySelector('#datepicker-from');
        this.datePickerTo = document.querySelector('#datepicker-to');

        this.clearButtons = document.querySelectorAll('.close');
        this.openCalendarButtons = document.querySelectorAll('.calendar');

        this.dpMin = null;
        this.dpMax = null;

        this.initDatePicker();
        this.addEventListeners();
    }

    initDatePicker() {
        let dpMin = new AirDatepicker('#datepicker-from', {
            locale: en,
            silent: true,
            autoClose: true,
            prevHtml: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2608 3.5L11.0833 4.3225L8.41159 7L11.0833 9.6775L10.2608 10.5L6.76075 7L10.2608 3.5Z" fill="black" />
                <path d="M6.41676 3.5L7.23926 4.3225L4.56759 7L7.23926 9.6775L6.41676 10.5L2.91676 7L6.41676 3.5Z" fill="black" />
              </svg>`,
            nextHtml: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.73925 3.5L2.91675 4.3225L5.58841 7L2.91675 9.6775L3.73925 10.5L7.23925 7L3.73925 3.5Z" fill="black" />
                <path d="M7.58324 3.5L6.76074 4.3225L9.43241 7L6.76074 9.6775L7.58324 10.5L11.0832 7L7.58324 3.5Z" fill="black" />
              </svg>`,
            dateFormat(date) {
                return date.toLocaleString('ua', {
                    year: 'numeric',
                    day: '2-digit',
                    month: 'numeric'
                }).split(".").join('_');
            },
            navTitles: {
                days: '<strong>MMMM</strong>  <strong>yyyy</strong>',
                months: 'Select month of <strong>yyyy</strong>'
            },
            onSelect({date}) {
                dpMax.update({
                    minDate: date
                })
            }
        });
        let dpMax = new AirDatepicker("#datepicker-to", {
            locale: en,
            autoClose: true,
            prevHtml: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2608 3.5L11.0833 4.3225L8.41159 7L11.0833 9.6775L10.2608 10.5L6.76075 7L10.2608 3.5Z" fill="black" />
                <path d="M6.41676 3.5L7.23926 4.3225L4.56759 7L7.23926 9.6775L6.41676 10.5L2.91676 7L6.41676 3.5Z" fill="black" />
              </svg>`,
            nextHtml: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.73925 3.5L2.91675 4.3225L5.58841 7L2.91675 9.6775L3.73925 10.5L7.23925 7L3.73925 3.5Z" fill="black" />
                <path d="M7.58324 3.5L6.76074 4.3225L9.43241 7L6.76074 9.6775L7.58324 10.5L11.0832 7L7.58324 3.5Z" fill="black" />
              </svg>`,
            dateFormat(date) {
                return date.toLocaleString('ua', {
                    year: 'numeric',
                    day: '2-digit',
                    month: 'numeric'
                }).split(".").join('_');
            },
            navTitles: {
                days: '<strong>MMMM</strong> <strong>yyyy</strong>',
                months: 'Select month of <strong>yyyy</strong>'
            },
            onSelect({date}) {
                dpMin.update({
                    maxDate: date
                })
            }
        });

        this.dpMin = dpMin;
        this.dpMax = dpMax;
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
        if (input === this.datePickerFrom || input === this.datePickerTo) {
            const dpInstance = input === this.datePickerFrom ? this.dpMin : this.dpMax;
            if (dpInstance) {
                dpInstance.clear();
            }
        }
    }

    handleClickOpenCalendarBtn(event) {
        const input = event.target.closest('.header__datepicker').querySelector('input');
        if (input === this.datePickerFrom || input === this.datePickerTo) {
            const dpInstance = input === this.datePickerFrom ? this.dpMin : this.dpMax;
            if (dpInstance) {
                dpInstance.show();
            }
        }
    }
}
