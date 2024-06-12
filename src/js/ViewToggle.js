export class ViewToggle {
    constructor() {
        this.listButton = document.querySelector('.row');
        this.gridButton = document.querySelector('.grid');
        this.container = document.querySelector('.content-section__list');
        this.items = document.querySelectorAll('.item');

        this.initView();
        this.addEventListeners();
    }

    initView() {
        this.container.classList.add('list-row');
        this.listButton.classList.add('icon-btn--active');
    }

    addEventListeners() {
        this.listButton.addEventListener('click', () => this.showListView());
        this.gridButton.addEventListener('click', () => this.showGridView());
    }

    showListView() {
        this.container.classList.remove('list-grid');
        this.container.classList.add('list-row');
        this.gridButton.classList.remove('icon-btn--active');
        this.listButton.classList.add('icon-btn--active');
        this.items[this.items.length - 1].style.display = 'flex';
    }

    showGridView() {
        this.container.classList.remove('list-row');
        this.container.classList.add('list-grid');
        this.listButton.classList.remove('icon-btn--active');
        this.gridButton.classList.add('icon-btn--active');
        this.items[this.items.length - 1].style.display = 'none';
    }
}
