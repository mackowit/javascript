const slideList = [{
        img: "images/img1.jpg",
        text: "Pierwszy tekst"
    },
    {
        img: "images/img2.jpg",
        text: "Drugi tekst"
    },
    {
        img: "images/img3.jpg",
        text: "Trzeci tekst"
    }
];

const slideTime = 5000;
let activeElement = 0;
let disactivElement = 0;

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('div.dots span')];

const changeDot = () => {
    const index = dots.findIndex(dot => dot.classList.contains('active'));
    dots[index].classList.remove('active');
    dots[activeElement].classList.add('active');
}

const changeSlideByKey = (e) => {

    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(intervalIndex);
        e.keyCode == 37 ? activeElement-- : activeElement++;
        if (activeElement === slideList.length) activeElement = 0;
        else if (activeElement < 0) activeElement = slideList.length - 1;
        image.src = slideList[activeElement].img;
        h1.textContent = slideList[activeElement].text;
        changeDot();
        intervalIndex = setInterval(changeSlide, slideTime);
    }
}

const changeSlide = () => {
    activeElement++;
    if (activeElement === slideList.length) activeElement = 0;
    image.src = slideList[activeElement].img;
    h1.textContent = slideList[activeElement].text;
    changeDot();
}

window.addEventListener('keydown', changeSlideByKey);
let intervalIndex = setInterval(changeSlide, slideTime);