import { DatePicker } from "./DatePicker.js";
import { ViewToggle } from "./ViewToggle.js";

function init() {
    new DatePicker();
    new ViewToggle();
}

document.addEventListener('DOMContentLoaded', init)
