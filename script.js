// Начинаем сложный уровень в dev. У первого урока не было сложного уровня
"use strict";

const lang = document.documentElement.lang;

const num = 266219;
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

let numArray = String(num).split("").map(Number);
let numMultiplication = numArray.reduce(function (result, num) {
  return result * num;
}, 1);
let nowDayWeek = new Date();
let title = " Океан789012345678901234567890123 ";

// Урок №4

const argumentString = function (funTitle) {
  if (typeof funTitle !== "string") {
    return alert(`Ваша пеменная title = ${funTitle}. Это не строка.`);
  } else {
    return funTitle.length > 30
      ? funTitle.trim().slice(0, 30) + "..."
      : funTitle.trim();
  }
};

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

console.log(argumentString(title));

console.log(numArray);
console.log(numMultiplication);
console.log(numMultiplication ** 3);
console.log(String(numMultiplication ** 3).slice(0, 2));
