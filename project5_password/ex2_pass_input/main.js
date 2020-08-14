const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ["jedEN", "DwA"];
const messages = ["działa", "super"];

const passMapped = passwords.map(item =>
    item.toUpperCase());
// const passMapped = passwords.map(item => {
//         return item.toUpperCase();});

const showMessage = (e) => {
    const text = e.target.value;
    div.textContent = "";
    passMapped.forEach((pass, index) => {
        if (pass === text.toUpperCase()) div.textContent = messages[index];
    });
}

input.addEventListener('input', showMessage);