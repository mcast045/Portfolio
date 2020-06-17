const newHeader = document.querySelector('.header-container')

window.onscroll = function (ev) {
    if (window.scrollY !== 0) {
        newHeader.classList.remove('header-container')
        newHeader.classList.add('fixed-header-container')
    } else {
        newHeader.classList.remove('fixed-header-container')
        newHeader.classList.add('header-container')
    }
};