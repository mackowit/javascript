const displayTime = () => {
    const time = new Date();
    const display = `${time.getHours() < 10 ? '0'+time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}.${time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds()}`;
    document.querySelector('.clock span').textContent = display;
    setInterval(displayTime, 1000);
}

displayTime();