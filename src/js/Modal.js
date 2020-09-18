export class Modal {

    static render(product) {
        const modal = document.getElementById('modalWindow');
        const close = document.getElementsByClassName("close")[0];
        const content = document.getElementById("content")
        modal.style.display = "block";

        content.innerHTML = '';

        const HTML = `<li class="product__item">
                <div class="product__img-box">
                    <a>
                        <img class="product__img"
                             src=${product.assortImage}>
                    </a>
                </div>

                <div class="product__description">
                  <h4 class="title--uppercase">
                     <a>${product.title}</a>
                  </h4>

                    <span class="product__cost">${product.cost}</span>
                    <span class="product__description sub-title ">${product.description} </span>

                    <h4 class="title--uppercase">
                        Description
                    </h4>
                    <span  class="sub-title ">
                     ${product.description}
                    </span>
                    <p class="title--uppercase">
                       ADDITIONAL INFORMATION
                    </p>
                    <span> ${product.additionalInformation}</span>
                </div>
            </li>`

        content.insertAdjacentHTML("afterbegin", HTML);
        close.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

new Modal()