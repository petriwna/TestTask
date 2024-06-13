export class ViewToggle {
    constructor() {
        this.listButton = document.querySelector('.row');
        this.gridButton = document.querySelector('.grid');
        this.moreButton = document.querySelector('.more');
        this.container = document.querySelector('.content-section__list');
        this.items = document.querySelectorAll('.item');

        this.itemLength = 0;

        this.initView();
        this.addEventListeners();
    }

    initView() {
        this.container.classList.add('list-row');
        this.listButton.classList.add('icon-btn--active');

        for(let i = 0; i < 9; i++) {
            this.items[i].style.display = 'flex';
        }
    }

    addEventListeners() {
        this.listButton.addEventListener('click', () => this.showListView());
        this.gridButton.addEventListener('click', () => this.showGridView());
        this.moreButton.addEventListener('click', () => this.showMoreItems());
    }

    showListView() {
        this.container.classList.remove('list-grid');
        this.container.classList.add('list-row');
        this.gridButton.classList.remove('icon-btn--active');
        this.listButton.classList.add('icon-btn--active');

        this.items.forEach((item) => {
            item.style.display = 'none';
        });


        this.showInitialItems();
    }

    showGridView() {
        this.container.classList.remove('list-row');
        this.container.classList.add('list-grid');
        this.listButton.classList.remove('icon-btn--active');
        this.gridButton.classList.add('icon-btn--active');

        this.items.forEach((item) => {
            item.style.display = 'none';
        })

        this.showInitialItems();
    }

    showInitialItems() {
        const initialDisplayCount = this.container.classList.contains('list-row') ? 9 : 8;
        const displayStyle = this.container.classList.contains('list-row') ? 'flex' : 'block';

        for (let i = 0; i < initialDisplayCount && i < this.items.length; i++) {
            this.items[i].style.display = displayStyle;
        }

        this.itemLength = initialDisplayCount;
    }

    showMoreItems() {
        const additionalItemCount = 4;
        const displayStyle = this.container.classList.contains('list-row') ? 'flex' : 'block';

        let displayedItems = 0;

        this.items.forEach((item) => {
            if (item.style.display === displayStyle) {
                displayedItems++;
            }
        });

        for (let i = displayedItems; i < displayedItems + additionalItemCount && i < this.items.length; i++) {
            this.items[i].style.display = displayStyle;
        }

        this.itemLength += additionalItemCount;
    }
}
