window.addEventListener('scroll', scrolling);
const div = document.querySelector('div');

function scrolling() {
    let scroll = window.scrollY;
    div.style.height = 10 + scroll / 10 + "px";
    div.style.width = 10 + scroll / 10 + "px";
}