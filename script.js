'use strict';

// Задание №1

// Задание №2

const arr = ['123', '456', '789', '279', '489', '124', '255'];
let test = '0';

let str = arr.map(function (a) {
  if (a[0] == 2 || a[0] == 4) {
    return (test = test + ',' + a);
  }
});

console.log(test.split(',').splice(1));
