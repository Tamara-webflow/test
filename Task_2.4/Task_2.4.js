let titleProject = "Оценка стоимости";
let screensValue = "шаблонные, с уникальным дизайном, с анимациями";
let screenPrice = 5000;
let percentage = 80;
let fullPrice = 100000;
let responsive = true;
console.log(titleProject);
console.log(screensValue);
console.log(screenPrice);
console.log(percentage);
console.log(fullPrice);
console.log(responsive);


titleProject = prompt('Название проекта?');
console.log(titleProject);
screensValue = prompt('Какие типы экранов? (шаблонные, с уникальным дизайном, с анимациями)');
console.log(screensValue);
responsive = confirm('Нужен ли адаптивный сайт?');
console.log(responsive);

let service1 = prompt('Какой сервис нужен?');
console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);
let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);
let servicePrice2 = +prompt('Сколько это будет стоить?');
console.log(servicePrice2);





let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();
console.log(allServicePrices, 'Стоимость всех услуг');


// function declaration

function getFullPrice() {
    return allServicePrices + screenPrice;
}
fullPrice = getFullPrice();
console.log(fullPrice, 'Стоимость всех услуг с учетом экранов');


// function expression:
let getTitle = function() {
    let firstChar = titleProject.charAt(0).toUpperCase();
    let restChars = titleProject.slice(1).toLowerCase();
    return firstChar + restChars;
};
let title = getTitle();
console.log(title, 'Название проекта');

let getServicePercentPrice = function () {
    return Math.round(fullPrice - fullPrice * 0.15);
};
let servicePercentPrice = getServicePercentPrice();
console.log(servicePercentPrice, 'Сумма после вычета 15% подрядчику');


let getRollbackMessage = function () {
    if (fullPrice > 50000) {
        return 'Даем скидку в 10%';     
    } else if (fullPrice === 50000) {
        return 'Даем скидку в 10%';
    }
    else if (fullPrice > 20000) {
        return 'Даем скидку в 5%';
    }    

    else if (fullPrice === 20000) {
        return 'Даем скидку в 5%';
    }   
    else if (fullPrice > 0 ) {
        return 'Cкидка не предусмотрена';
    } else if (fullPrice === 0) {
        return 'Cкидка не предусмотрена';
    }   
    else {
        return 'Что то пошло не так';
    }

};
let rollbackMessage = getRollbackMessage();
console.log(rollbackMessage, 'Сообщение о скидке');

