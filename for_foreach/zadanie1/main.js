const button = document.querySelector('button');
const list = document.querySelectorAll('li');
let liFontSize = 10;

button.addEventListener('click', () => {
    //for (let i = 0; i < list.length; i++) {
    //    list[i].style.fontSize = liFontSize + "px";
    //    list[i].style.display = "block";
    //}
    list.forEach((li) => {
        li.style.fontSize = `${liFontSize}px`;
        li.style.display = "block";
    });
    liFontSize++;
});