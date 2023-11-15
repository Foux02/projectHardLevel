'use strict';

// Задание №2

const arr = [123, 281, 456, 789, 489, 124, 255];
const arrString = arr.map(String);

let str = arrString.filter(function (a) {
  if (a[0] == 2 || a[0] == 4) {
    return a;
  }
});
console.log(str.map(Number));

// Задание №3

for (let i = 2; i < 101; i++) {
  if (
    ((i / 2) % 1 === 0 && i > 2) ||
    ((i / 3) % 1 === 0 && i > 3) ||
    ((i / 4) % 1 === 0 && i > 4) ||
    ((i / 5) % 1 === 0 && i > 5) ||
    ((i / 6) % 1 === 0 && i > 6) ||
    ((i / 7) % 1 === 0 && i > 7) ||
    ((i / 8) % 1 === 0 && i > 8) ||
    ((i / 9) % 1 === 0 && i > 9)
  )
    continue;

  console.log(`Делители этого числа: 1 и ${i}`);
}
