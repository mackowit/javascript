const toDoList = [];

const input = document.querySelector('input');
const search = document.querySelector('input.search');
//const button = document.querySelector('button');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const span = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');

const removeElement = (e) => {
    toDoList.splice(e.target.parentNode.dataset.key, 1);
    //e.target.parentNode.remove();
    ul.textContent = "";
    toDoList.forEach((item, index) => {
        item.dataset.key = index;
        ul.appendChild(item);
    });
    span.textContent = listItems.length;
}

const addElement = (e) => {
    e.preventDefault();
    const itemText = input.value;
    if (itemText === "") return;
    //console.log(itemText);
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.className = 'task';
    //li.textContent = itemText;
    li.innerHTML = itemText + "<button>Delete</button>";
    toDoList.push(li);
    ul.textContent = "";
    toDoList.forEach((item, index) => {
        item.dataset.key = index;
        ul.appendChild(item);
    });
    //ul.appendChild(li);
    //span.textContent = document.querySelectorAll('li').length;
    span.textContent = listItems.length;
    input.value = "";
    li.querySelector('button').addEventListener('click', removeElement);
    findElement();
}

const findElement = () => {
    const searchText = search.value;
    console.log(searchText);
    ul.textContent = "";
    toDoList.forEach((item, index) => {
        if (item.textContent.includes(searchText)) {
            ul.appendChild(item);
        } else item.remove();
        /* if (!item.textContent.includes(searchText)) item.style.visibility = "hidden";
        else item.style.visibility = "visible"; */
    })
}

form.addEventListener('submit', addElement);
//button.addEventListener('click', addElement);
search.addEventListener('input', findElement);