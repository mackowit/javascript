const button = document.querySelector('button.btn');
button.addEventListener('click', addElement);
let counter = 0;

function addElement() {
    counter++;
    const div = document.createElement('div');
    div.textContent = counter;
    document.body.appendChild(div);
    if (counter % 5 == 0) div.className = 'circle';
}