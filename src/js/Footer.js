class Footer{
    constructor(footer) {
        this.footer = document.getElementById(footer)
    }

    render(){
        const HTML = `
        <div class='wrapper'>
            <div class="footer__block">
                <div class="footer__contact-us">
                    <span class="title--uppercase">FEEL FREE TO CONTACT US</span>
                    <span class="sub-title">8500, Lorem Street, Chicago, IL, 55030</span>
                    <span class="sub-title">sales@yoursite.com</span>
                    <span class="sub-title">(123) 456-78-90</span>
                </div>
    
            </div>
            <div class="footer__bottom">
                <span>AncoraThemes © 2020. All rights reserved</span>
                <img src="http://chocorocco.ancorathemes.com/wp-content/uploads/2017/05/flogo.png">
            </div>
    
        </div>`;
        this.footer.insertAdjacentHTML("afterbegin", HTML);
    }
}

const footer = new Footer('footer')
footer.render()