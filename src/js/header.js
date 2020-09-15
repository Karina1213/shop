export function scrolledHeader() {
    const homeHeader =document.getElementById('home-header')

    if (homeHeader) {
        window.onscroll = function () {
            let scrolled = window.pageXOffset || document.documentElement.scrollTop;
            if (scrolled > 60) {
                homeHeader.style.backgroundColor = "black"
            } else {
                homeHeader.style.backgroundColor = "transparent"
            }
        }
    }
}
scrolledHeader()

