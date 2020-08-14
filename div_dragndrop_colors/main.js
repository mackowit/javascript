const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;
let isClicked = false;

let inDivX;
let inDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'grey';
    isClicked = true;
    inDivX = e.offsetX; //odległość od krawędzi elementu
    inDivY = e.offsetY;
});

div.addEventListener('mousemove', (e) => {
    if(isClicked) {
    div.style.top = `${e.clientY - inDivY}px`;
    div.style.left = `${e.clientX - inDivX}px`;
    }
});

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
    isClicked = false;
});