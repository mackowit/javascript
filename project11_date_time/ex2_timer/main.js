setInterval(() => {
    const nowTime = new Date().getTime();
    const endTime = new Date('2020-08-20 20:00:00').getTime();
    const time = Math.floor((endTime - nowTime) / 1000);
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time - days * 86400) / 3600);
    const minutes = Math.floor((time - days * 86400 - hours * 3600) / 60);
    const seconds = time - days * 86400 - hours * 3600 - minutes * 60;
    //console.log(days, hours, minutes, seconds);
    document.querySelector('span.d').textContent = days;
    document.querySelector('span.h').textContent = hours;
    document.querySelector('span.m').textContent = minutes;
    document.querySelector('span.s').textContent = seconds;
}, 1000);