import {LocalStorage} from "./LocalStorage.js";
import {Modal} from "./Modal.js";

export class Button {
    static addToCart() {
        const productList = document.getElementById('productList')
        const cart = LocalStorage.getFromLocalStorage('cart') || {};

        productList.addEventListener('click', (e) => {
                const target = e.target;

                const itemTitle = target.parentNode.querySelector('.product__title').innerHTML;
                const itemPrice = target.parentNode.querySelector('.product__cost').innerHTML;

                if (target.classList.contains('see-more')) {

                    const dataItem = target.dataset['item'];
                    const description = JSON.parse(dataItem)
                    Modal.render(description)
                }

                if (target.classList.contains('to-cart')) {
                    const id = target.dataset['id'];
                    if (cart.hasOwnProperty(id)) {
                        cart[id][2] += 1
                    } else {
                        cart[id] = [itemTitle, itemPrice, 1]
                    }
                    LocalStorage.addToLocalStorage('cart', cart);
                }
            }
        )
    }
}

