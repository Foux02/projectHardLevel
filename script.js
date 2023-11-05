// Начинаем сложный уровень в dev. У первого урока не было сложного уровня

const num = 266219;
let numArray = ("" + num).split("").map(Number);

console.log(numArray);

let numMultiplication = numArray.reduce(function (result, num) {
  return result * num;
}, 1);

console.log(numMultiplication);
console.log(numMultiplication ** 3);
console.log(String(numMultiplication ** 3).substr(0, 2));
