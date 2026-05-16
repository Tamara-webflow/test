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

fullPrice = servicePrice1 + servicePrice2 + screenPrice;
console.log((fullPrice), 'Стоимость всех услуг без скидки');
let servicePercentPrice = Math.round(fullPrice - fullPrice * 0.15);
console.log((servicePercentPrice), 'Сумма после вычета 15% подрядчику');

if (fullPrice > 50000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice === 50000) {
    console.log('Даем скидку в 10%');
}
else if (fullPrice > 20000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice === 20000) {
    console.log('Даем скидку в 5%');
}
else if (fullPrice > 0 ) {
    console.log('Cкидка не предусмотрена');
} else if (fullPrice === 0) {
    console.log('Cкидка не предусмотрена');
}

else {
    console.log('Что то пошло не так');
}
