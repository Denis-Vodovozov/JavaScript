// 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");
if (num1 <= 1 && num2 >= 3) {
  console.log(
    `Число ${num1} меньше или равно 1, а число ${num2} больше или равно 3`
  );
} else {
  console.log(`Число ${num1} или ${num2} не входит в заданный отрезок`);
}

// 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
test = test === true ? "+++" : "---";
console.log(test);

// 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const day = +prompt("Введите число от 1 до 31");

const day = getRandomInt(1, 31);
if (day <= 10) {
  console.log(`Число ${day} входит в первую декаду месяца`);
} else if (day >= 11 && day <= 20) {
  console.log(`Число ${day} входит во вторую декаду месяца`);
} else {
  console.log(`Число ${day} входит в третью декаду месяца`);
}

// 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

const number = +prompt("Введите число");
const hundred = Math.trunc((number % 1000) / 100);
const ten = Math.trunc((number % 100) / 10);
const pieces = Math.trunc(number % 10);
console.log(
  `В числе ${number} количесвто сотен: ${hundred}, десятков: ${ten}, единиц: ${pieces}`
);

// 5
// Необязательное задание. Определить высокосный или не высокосный год.
