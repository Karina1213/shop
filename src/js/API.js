import {Product} from "../index.js";

class API {
    constructor(category, key, query) {
        this.query = query || 'products';
        this.key = key || '5f560e6a32f56200168bcdc3';
    }

    createUrl() {
        this.appUrl = `https://${this.key}.mockapi.io/api/data/${this.query}`;
        return this;
    }

    async getResponse() {
        const response = await fetch(this.appUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(`Error, status: ${response.status}`);
        } else {
            const assortments = new Product('Assortments', 'productList');
            assortments.render(result).addToCart()

            const chocolateBars = new Product('Chocolate bars', 'productList');
            chocolateBars.render(result);

            const truffles = new Product('Truffles', 'productList');
            truffles.render(result);

            const barks = new Product('Barks', 'productList');
            barks.render(result)
        }
        return result
    }
}

const request = new API();
request.createUrl().getResponse();
