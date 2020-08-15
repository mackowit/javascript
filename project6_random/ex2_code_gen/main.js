const chars = 'ABCDEFGHIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNmbr = 1000;
const charsNmbr = 10;

const codesGenerator = () => {
    for(let i = 0; i < codesNmbr; i++) {
        let code = '';
        for(let i = 0; i < charsNmbr; i++) {
            let index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}
btn.addEventListener('click', codesGenerator);