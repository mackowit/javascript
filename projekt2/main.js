const button = document.querySelector('button#btn');
const ul = document.querySelector('ul');
button.addEventListener("click", addElement);
let counter = 1;

function addElement() {
    const li = document.createElement('li');
    li.textContent = counter;
    ul.appendChild(li);
    if (counter % 3 == 0) li.className = "big";
    counter += 2;
}