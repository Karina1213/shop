import {LocalStorage} from "./localStorage.js";

class Cart {
    constructor() {
        this.cartBox = document.getElementById('cartBox')
        this.cartData = LocalStorage.getFromLocalStorage('cart');
    }

    getLocalStorage() {
        if (this.cartData !== null) {
            this.render('Name', 'Cost', 'Count')
        } else {
            this.cartBox.innerHTML = `<div class ='cart__box-button'>
                 <a href="../pages/products-page.html"
                  class = 'button categories__button categories__button--hovered'>
                        VEIW ALL PRODUCTS</a>
              </div>`
        }
        return this
    }

    render(name, cost, count) {
        // localStorage.clear()
        let totalItems = `<table class="table cart__table">
            <tr class="table__title sub-title">
            <th> ${name} </th>
            <th> ${cost} </th>
            <th> ${count} </th> </tr>`

        for (let items in this.cartData) {
            totalItems += '<tr>';

            for (let i = 0; i < this.cartData[items].length; i++) {
                totalItems += '<td class="table__td sub-title">' + this.cartData[items][i] + '</td>';
            }
            totalItems += '</tr>';
        }
        totalItems += '<table>';
        this.cartBox.innerHTML = totalItems;
    }
}

const cart = new Cart()
cart.getLocalStorage()
