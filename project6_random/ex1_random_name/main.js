const btn = document.querySelector('button');

const names = ["Ala", "Ola", "Ania", "Iza", "Iga"];

const nameGenerator = () => {
    let index = (Math.floor(Math.random() * names.length));
    console.log(index);
    document.querySelector('div').textContent = names[index];
}

btn.addEventListener('click', nameGenerator);