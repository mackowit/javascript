const array = [23, 32, 546, 334, 33, 3, 5];
//filter
const odd = array.filter((number) => number%2);
const even = array.filter((number) => !(number%2));
const numberBiggerThan100 = array.filter((number) => number > 100);
//map
const people = array.map(number => number += ' osób');
const double = array.map(number => number * 2);
//forEach
array.forEach((number, index) => array[index] = number * 2);

//SEARCH
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li')
const items = Array.from(li);

input.addEventListener('input', (e) => {
    //items.forEach(item => ul.removeChild(item));
    const searchText = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    filteredItems.forEach(item => ul.appendChild(item));
});