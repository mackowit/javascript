const init = () => {
    let time = 0;
    document.body.textContent = `You're on this website 0 seconds`;
    const increment = () => {
        document.body.textContent = `You're on this website ${time++} seconds`;
    }
    return increment;
}

const timer = init();

setInterval(timer, 1000);