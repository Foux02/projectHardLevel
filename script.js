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
const c = document.createElement('p');

function updateSite() {
  nowDate = new Date();

  if (nowDate.getHours() === 1 || nowDate.getHours() === 21) {
    hourText = 'час';
  } else if (
    (nowDate.getHours() > 4 && nowDate.getHours() < 21) ||
    nowDate.getHours() === 0
  ) {
    hourText = 'часов';
  } else {
    hourText = 'часа';
  }

  const numSeconds = nowDate.getSeconds();
  let appendNullSeconds = numSeconds;
  appendNullSeconds > -1 && appendNullSeconds < 10
    ? (appendNullSeconds = `${'0' + numSeconds}`)
    : (appendNullSeconds = `${numSeconds}`);

  const numMinutes = nowDate.getMinutes();
  let appendNullMinutes = numMinutes;
  appendNullMinutes > -1 && appendNullMinutes < 10
    ? (appendNullMinutes = `${'0' + numMinutes}`)
    : (appendNullMinutes = `${numMinutes}`);

  const numHours = nowDate.getHours();
  let appendNullHours = numHours;
  appendNullHours > -1 && appendNullHours < 10
    ? (appendNullHours = `${'0' + numHours}`)
    : (appendNullHours = `${numHours}`);

  const numMonth = nowDate.getMonth();
  let appendNullMonth = numMonth;
  appendNullMonth > -1 && appendNullMonth < 10
    ? (appendNullMonth = `${'0' + (numMonth + 1)}`)
    : (appendNullMonth = `${numMonth + 1}`);

  const numDate = nowDate.getDate();
  let appendNullDate = numDate;
  appendNullDate > -1 && appendNullDate < 10
    ? (appendNullDate = `${'0' + numHours}`)
    : (appendNullDate = `${numDate}`);

  a.innerHTML = `Сегодня ${week[nowDate.getDay()]}, ${nowDate.getDate()} ${
    month[nowDate.getMonth()]
  } ${nowDate.getFullYear()} года, ${nowDate.getHours()} ${hourText} ${nowDate.getMinutes()} минуты ${nowDate.getSeconds()} секунды`;

  b.innerHTML = `${new Intl.DateTimeFormat('ru').format(
    nowDate
  )} - ${new Intl.DateTimeFormat('ru', {
    timeStyle: 'medium',
  }).format(nowDate)}`;

  c.innerHTML = `${appendNullDate}.${appendNullMonth}.${nowDate.getFullYear()} - ${appendNullHours}:${appendNullMinutes}:${appendNullSeconds}`;

  document.body.append(a);
  document.body.append(b);
  document.body.append(c);
}

setInterval(updateSite, 1000);
