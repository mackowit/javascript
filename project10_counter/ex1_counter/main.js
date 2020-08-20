const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = "Aktualny stan licznika kliknięć: " + number;
    }
}

const counter = add();
document.addEventListener('click', counter);