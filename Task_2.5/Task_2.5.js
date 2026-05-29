//  ПЕРЕМЕННЫЕ 
let screenPrice = 5000;
let percentage = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let newTitle = '';
let titleProject = "Оценка стоимости";
let screensValue = "шаблонные, с уникальным дизайном, с анимациями";
let responsive;
let service;
let servicePrice;
let serviceSecond;
let servicePriceSecond;




//  ФУНКЦИИ 

// ДЗ пункт 1 — функция проверки на число
const checkIsNumber = function (number) {
    return isFinite(parseFloat(number)) && number !== null && number.trim() !== '';
};

const asking = function () {
    titleProject = prompt('Название проекта?');
    screensValue = prompt('Какие типы экранов? (шаблонные, с уникальным дизайном, с анимациями)');
    responsive = prompt('Нужен ли адаптивный сайт?');
};

// ДЗ пункт 2 — цикл while для получения корректного screenPrice
const askScreenPrice = function () {
    screenPrice = prompt('Сколько стоит экран?');

    while (!checkIsNumber(screenPrice) || screenPrice === null || screenPrice.trim() === '') {
        screenPrice = prompt('Введи корректное число для стоимости экрана:');
    }

    screenPrice = parseFloat(screenPrice);
};

// ДЗ пункт 3 — цикл for внутри функции для получения цен двух сервисов
const askingServices = function () {
    let sum = 0;

    for (let i = 1; i <= 2; i++) {
        let serviceName = prompt(`Какой сервис ${i} нужен?`);
        let textFromPromt = prompt('Сколько это будет стоить?');

        while (!checkIsNumber(textFromPromt) || textFromPromt === null || textFromPromt.trim() === '') {
            textFromPromt = prompt('Введи корректное число:');
        }

        if (i === 1) {
            service = serviceName;
            servicePrice = parseFloat(textFromPromt);
        } else {
            serviceSecond = serviceName;
            servicePriceSecond = parseFloat(textFromPromt);
        }

        sum += parseFloat(textFromPromt);
    }

    return sum;
};

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (percentage / 100));
};

const getTitle = function () {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLocaleLowerCase();
};




//  ВЫЗОВЫ 
asking();
askingServices();

allServicePrices = askingServices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
newTitle = getTitle();

if (fullPrice > 50000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Cкидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Проверка на строгое равенство');
}

console.log(Math.ceil(servicePercentPrice), 'Округленная сумма после вычета 10% подрядчику');
console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service);
console.log(servicePrice, 'Стоимость первого сервиса');
console.log(serviceSecond);
console.log(servicePriceSecond, 'Стоимость второго сервиса');
