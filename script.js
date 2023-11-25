// Начинаем сложный уровень в dev. У первого урока не было сложного уровня
'use strict';
/*
let nowDayWeek = new Date();

let week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

//let week2 = week.join('\n');

//document.body.prepend(document.createTextNode(week2));

//console.log(week2);

for (let key in week) {
  document.body.prepend(document.createTextNode(week[key]));
}

console.dir(document.childNodes);

/*

if (lang == 'ru') {
  document.body.prepend(
    document.createTextNode(dayWeekRu[nowDayWeek.getDay()])
  );
} else if (lang == 'en') {
  document.body.prepend(
    document.createTextNode(dayWeekEn[nowDayWeek.getDay()])
  );
} else {
}
*/
const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

for (let i = 0, len = week.length; i < len; i++) {
  let html = week[i];
  if (i === 0) html = html.italics(); // понедельник
  else if (i > 4) html = html.bold(); // выходные

  const p = document.createElement('div');
  p.innerHTML = html;
  document.body.appendChild(p);
}

console.dir(document.childNodes);
