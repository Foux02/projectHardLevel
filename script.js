'use strict';

const week = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const month = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

let nowDate;
let hourText;

const a = document.createElement('p');
const b = document.createElement('p');

function updateSite() {
  nowDate = new Date();

  if (nowDate.getHours() === 1 || nowDate.getHours() === 21) {
    hourText = 'час';
    console.log('1 или 21 ' + nowDate.getHours() + hourText);
  } else if (
    (nowDate.getHours() > 4 && nowDate.getHours() < 21) ||
    nowDate.getHours() === 0
  ) {
    hourText = 'часов';
    console.log('от 5 до 20 ' + nowDate.getHours() + hourText);
  } else {
    hourText = 'часа';
    console.log('остальное ' + nowDate.getHours() + hourText);
  }

  a.innerHTML = `Сегодня ${week[nowDate.getDay()]}, ${nowDate.getDate()} ${
    month[nowDate.getMonth()]
  } ${nowDate.getFullYear()} года, ${nowDate.getHours()} ${hourText} ${nowDate.getMinutes()} минуты ${nowDate.getSeconds()} секунды`;

  b.innerHTML = `${new Intl.DateTimeFormat('ru').format(
    nowDate
  )} - ${new Intl.DateTimeFormat('ru', {
    timeStyle: 'medium',
  }).format(nowDate)}`;

  document.body.appendChild(a);
  document.body.appendChild(b);
}

setInterval(updateSite, 1000);
