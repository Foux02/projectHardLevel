// Начинаем сложный уровень в dev. У первого урока не было сложного уровня
"use strict";
const num = 266219;
let numArray = String(num).split("").map(Number);

console.log(numArray);

let numMultiplication = numArray.reduce(function (result, num) {
  return result * num;
}, 1);

console.log(numMultiplication);
console.log(numMultiplication ** 3);
console.log(String(numMultiplication ** 3).slice(0, 2));

//Урок №3

const lang = document.documentElement.lang;
const dayWeekRu = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const dayWeekEn = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let nowDayWeek = new Date();

if (lang == "ru") {
  document.body.prepend(
    document.createTextNode(dayWeekRu[nowDayWeek.getDay()])
  );
} else if (lang == "en") {
  document.body.prepend(
    document.createTextNode(dayWeekEn[nowDayWeek.getDay()])
  );
} else {
}

switch (true) {
  case lang == "ru":
    document.body.prepend(
      document.createTextNode(dayWeekRu[nowDayWeek.getDay()])
    );
    break;

  default:
    document.body.prepend(
      document.createTextNode(dayWeekEn[nowDayWeek.getDay()])
    );
    break;
}

lang == "ru"
  ? document.body.prepend(
      document.createTextNode(dayWeekRu[nowDayWeek.getDay()])
    )
  : document.body.prepend(
      document.createTextNode(dayWeekEn[nowDayWeek.getDay()])
    );

let namePerson = "Сергей";
namePerson == "Артем"
  ? console.log("Директор")
  : namePerson == "Александр"
  ? console.log("Преподаватель")
  : console.log("Студент");
