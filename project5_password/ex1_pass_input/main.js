const passwords = ["wiosna", "lato"];
const input = document.querySelector('input');
const div = document.querySelector('.message');
const messages = ["sosna", "tato"];
input.addEventListener('input', () => {
    document.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            const text = e.target.value;
            passwords.forEach((password, index) => {
                if (password === text) div.textContent = messages[index];
            });
        }
    });
});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
});