const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault(); //zapobiega submitowaniu strony
    const input = document.querySelector('input');
    const newName = input.value;
    if(newName.length) {
        for(name of names) {
            if(name === newName) {
                alert("Takie imię już istnieje!");
                document.querySelector('input').value = "";
                return;
            }
        }
    names.push(newName);
    div.textContent += newName + ", ";
    document.querySelector('input').value = "";
    }
}

document.querySelector('button').addEventListener('click', addName);