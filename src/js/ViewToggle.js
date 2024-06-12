export class ViewToggle {
    constructor() {
        this.listButton = document.querySelector('.row');
        this.gridButton = document.querySelector('.grid');
        this.listView = document.querySelector('.content-section__list-row');
        this.gridView = document.querySelector('.content-section__list-grid');

        this.initView();
        this.addEventListeners();
    }

    initView() {
        this.gridView.classList.add('visually-hidden');
        this.listButton.classList.add('icon-btn--active');
    }

    addEventListeners() {
        this.listButton.addEventListener('click', () => this.showListView());
        this.gridButton.addEventListener('click', () => this.showGridView());
    }

    showListView() {
        this.listView.classList.remove('visually-hidden');
        this.gridView.classList.add('visually-hidden');
        this.gridButton.classList.remove('icon-btn--active');
        this.listButton.classList.add('icon-btn--active');
    }

    showGridView() {
        this.gridView.classList.remove('visually-hidden');
        this.listView.classList.add('visually-hidden');
        this.listButton.classList.remove('icon-btn--active');
        this.gridButton.classList.add('icon-btn--active');
    }
}
