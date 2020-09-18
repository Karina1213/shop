import {LocalStorage} from "./LocalStorage.js";

export class Header {
    constructor(header, headerColor) {
        this.header = document.getElementById(header)
        this.headerColor = headerColor;

        this.navBar = [{
            link: '../../index.html',
            title: 'Home'
        }, {
            link: 'products-page.html',
            title: 'Products'
        }, {
            link: 'comments.html',
            title: 'Comments'
        }];
    }

    checkStatus() {
        if (LocalStorage.getFromLocalStorage("userStatus") === true) {
            this.navBar.push({
                link: 'cart.html',
                title: 'Cart'
            }, {
                link: '',
                title: 'Log out'
            })
        } else {
            this.navBar.push({
                link: 'login-page.html',
                title: 'Log in'
            })
        }
        return this
    }

    render() {
        this.renderNav = this.navBar.map((nav, index) => {

            return `<li class="header__item" id="${nav.title}" >
                         <a class="header__menu assortments__menu assortments__menu--hovered"  style="color: ${this.headerColor}"
                            href="${nav.link}">
                             ${nav.title}
                        </a>
                    </li>`
        });

        this.HTML = `
            <div class="header__wrapper" >
                <div class="logo header__logo">
                    <img class="logo__img"
                     src="http://chocorocco.ancorathemes.com/wp-content/uploads/2017/09/logox2_white.png">
                  </div>

             <ul class="header__list">
                ${this.renderNav}
             </ul>
             </div>`;

        if (this.header) {
            this.header.insertAdjacentHTML("afterbegin", this.HTML);
        }
        return this
    }
}

const header = new Header('header', '"#5a4f45"');
header.checkStatus().render()