const button = document.querySelector('button#btn');
button.addEventListener("click", addElement);
let counter = 1;

function addElement() {
    const li = document.createElement('li');
    li.textContent = counter;
    const ul = document.querySelector('ul');
    ul.appendChild(li);
    if (counter % 3 == 0) li.className = "big";
    counter += 2;
}