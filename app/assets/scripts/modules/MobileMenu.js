class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector(".site-header")
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('#menuContent');
        this.middleMenuLine = document.querySelector('#middle');
        this.events();

    }


    events() {
        this.menuIcon.addEventListener('click', (e) => {
            this.toggleTheMenu(this);
            e.preventDefault();
        });

    }
    toggleTheMenu() {
        this.menuContent.setAttribute('data-state', this.menuContent.getAttribute('data-state') === 'open' ? 'closed' : 'open');
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.setAttribute('data-state', this.menuIcon.getAttribute('data-state') === 'open' ? 'closed' : 'open');
        this.middleMenuLine.setAttribute('data-state', this.middleMenuLine.getAttribute('data-state') === 'open' ? 'closed' : 'open');
    };
}

export default MobileMenu