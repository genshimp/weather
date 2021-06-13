'use strict';

//Получаем данные со страницы
const moscow = document.querySelector(".moscow");
const apshara = document.querySelector(".apshara");
const hada = document.querySelector(".hada");

const cityEl = document.querySelector(".city-weather");
const descEl = document.querySelector(".desc");
const tempEl = document.querySelector(".temp");
const feelLikeEl = document.querySelector(".feellike");
const vlagaEl = document.querySelector(".vlaga");
const speedEl = document.querySelector(".speed");
const imgEl = document.querySelector('img');
const btns = document.querySelectorAll('button');

//Пишем функцию
function toCity(town) {
    const apiKey = "dce3e0852560f50a00c1457e9b8ec15b";
    const city = town;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    axios.get(url).then(res => {
        const cityName = res.data.name;
        const temp = res.data.main.temp;
        const vlaga = res.data.main.humidity;
        const speed = res.data.wind.speed;
        const feelTemp = res.data.main.feels_like;
        const description = res.data.weather[0].description; // Описание погодных условий
        let iconWeather = res.data.weather[0].icon; // иконка состояния погоды

        cityEl.textContent = `Погода в городе ${cityName}`;
        descEl.textContent = `Сейчас ${description}`;
        tempEl.textContent = `Температура: ${temp} °C`;
        feelLikeEl.textContent = `Ощущается как: ${feelTemp} °C`;
        vlagaEl.textContent = `Влажность воздуха: ${vlaga}%`;
        speedEl.textContent = `Скорость ветра: ${speed} км/ч`;
        imgEl.src = `http://openweathermap.org/img/wn/${iconWeather}@4x.png`;
    })
}
toCity('Khadyzhensk');

//Делаем смену городов и анимацию нажатий кнопок
moscow.onclick = () => {
    btns[2].style.cssText = 'background: linear-gradient(145deg, #a0a2dd, #bec1ff); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;'
    btns[1].style.cssText = 'background: linear-gradient(145deg, #bec1ff, #a0a2dd); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;';
    btns[0].style.cssText = 'background: linear-gradient(145deg, #bec1ff, #a0a2dd); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;';
    toCity("Moscow")
};

apshara.onclick = () => {
    btns[0].style.cssText = 'background: linear-gradient(145deg, #a0a2dd, #bec1ff); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;'
    btns[1].style.cssText = 'background: linear-gradient(145deg, #bec1ff, #a0a2dd); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;';
    btns[2].style.cssText = 'background: linear-gradient(145deg, #bec1ff, #a0a2dd); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;';
    toCity('Apsheronsk');
};

hada.onclick = () => {
    btns[1].style.cssText = 'background: linear-gradient(145deg, #a0a2dd, #bec1ff); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;'
    btns[0].style.cssText = 'background: linear-gradient(145deg, #bec1ff, #a0a2dd); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;';
    btns[2].style.cssText = 'background: linear-gradient(145deg, #bec1ff, #a0a2dd); box-shadow:  6px 6px 11px #6b6c93,-6px -6px 11px #f9fcff;';
    toCity('Khadyzhensk');
};







