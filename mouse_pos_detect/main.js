const h1 = document.querySelector('h1');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const height = window.innerHeight;
    const width = window.innerWidth;
    
    const red = x / width * 100;
    const green = y / height * 100;
    const blue = (x / width + y / height)*50;
    
    h1.textContent = `${red}, ${green}, ${blue}`;
    //client to jest względem okna przegladarki
    //page jest wzgledem strony
    //screen jest wzgledem ekranu komputera
    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%`;
})