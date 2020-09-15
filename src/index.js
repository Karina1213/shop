import {LocalStorage} from "./js/localStorage.js";

export class Product {
    constructor(category, blockId) {
        this.productList = document.getElementById(blockId)
        this.cart = LocalStorage.getFromLocalStorage('cart') || {};
        this.category = category;
    }

    render(data) {
        let listProductsByCategory;

        data.forEach(item => {
            if (item.category == this.category) {
                let g = `<h4>${item.category}</h4>`
                this.productList.insertAdjacentHTML("afterbegin", g);
                return listProductsByCategory = item.product
            }
        })

        listProductsByCategory.forEach((item) => {
            const HTML = `<li class="product__item" >
            
            <div class="product__img-box">
                <a href="" >
                    <img class="product__img"
                         src=${item.assortImage}>
                </a>
            </div>

            <div class="product__description">
                <h4 class="title--uppercase">
                    <a class="product__title">${item.title}</a>
                </h4>
                <span class="product__description sub-title ">${item.description}</span>
                <span class="product__cost">${item.cost} </span>
                <button  data-id=${item.id} class="button to-cart categories__button--hovered product__button">
                    <i class="fa fa-cart-arrow-down product__fa" aria-hidden="true"></i>
                    to card
                </button>
            </div>
        </li>`;
            this.productList.insertAdjacentHTML("afterbegin", HTML);
        })
        return this
    }

    addToCart() {
        this.productList.addEventListener('click', (e) => {
                const target = e.target;
                const itemTitle = target.parentNode.querySelector('.product__title').innerHTML;
                const itemPrice = target.parentNode.querySelector('.product__cost').innerHTML;
                 //const itemImg = target.parentNode.querySelector('.product__img').getAttribute('src');

                if (target.classList.contains('to-cart')) {
                    const id = target.dataset['id'];

                    if (this.cart.hasOwnProperty(id)) {
                        this.cart[id][2] += 1
                    } else {
                        this.cart[id] = [ itemTitle, itemPrice, 1]
                    }
                    LocalStorage.addToLocalStorage('cart', this.cart);
                    console.log('LocalStorage', localStorage)
                }
            }
        )
    }
}

console.log('LocalStorage', localStorage)