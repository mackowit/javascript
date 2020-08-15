const advices = ["Fight!", "Think it over again"];
const defaultLength = advices.length;

const input = document.querySelector('input');
const addButton = document.querySelector('.add');
const resetButton = document.querySelector('.clean');
const h1 = document.querySelector('h1');

input.addEventListener('focus', () => h1.textContent = "");

const addAdvice = (e) => {
    e.preventDefault();
    const advice = input.value;
    advices.push(advice);
    console.log(advices);
    input.value = "";
}

const resetAdvices = (e) => {
    e.preventDefault();
    advices.splice(defaultLength, advices.length - defaultLength);
    h1.textContent = "";
}

const showAdvice = () => {
    let index = Math.floor(Math.random() * advices.length);
    h1.textContent = advices[index];
    console.log(index, advices[index]);
}

const showOptions = () => {
    alert(advices);
    h1.textContent = "";
}

addButton.addEventListener('click', addAdvice);
resetButton.addEventListener('click', resetAdvices);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.showOptions').addEventListener('click', showOptions);

//losowanie liczb z dowolnego przedziału 4-6
let number = Math.random() (6-4) + 4;
//losowanie liczb 4=<x>=6
let number = Math.random() (6-4+1) + 4;

