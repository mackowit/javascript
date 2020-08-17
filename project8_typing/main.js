const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');

/*const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC';

const indexTyping = setInterval(addLetter, 50);
setInterval(animateCursor, 400);

let indexText = 0;

function addLetter() {
    spnText.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length) clearInterval(indexTyping);
    
}*/

const text = ["Zaczynamy...", "Witaj!!!", "Dobrze, że tu jesteś!"];

let textIndex = 0;
let textItemIndex = 0;

function addLetter() {
    if(textIndex === text.length) {
            return;
        }
    if(textItemIndex === text[textIndex].length) {
        return setTimeout(() => {
        textIndex++;
        textItemIndex = 0;
        spnText.textContent = "";
        addLetter();
        }, 1000);
    }
    console.log(textIndex, textItemIndex);
    spnText.textContent += text[textIndex][textItemIndex];
    textItemIndex++;
    setTimeout(addLetter, 100);
}

addLetter();
setInterval(animateCursor, 400);
function animateCursor() {
    spnCursor.classList.toggle('active');
}