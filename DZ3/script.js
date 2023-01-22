//1 Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cube = (x) => x ** 3;
console.log(cube(2) + cube(3));

//2 Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function payTaxes(salary) {
  console.log(
    `Размер заработной платы за вычетом налогов равен ${salary * 0.87}`
  );
}

const number = +prompt("Введите число");
if (isNaN(number) || number === "") {
  alert("Значение задано неверно!");
} else {
  payTaxes(number);
}

//3 Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function findMax(num1, num2, num3) {
  let max = num1;
  if (max < num2) max = num2;
  if (max < num3) max = num3;
  return max;
}

const number1 = +prompt("Введите первое число");
const number2 = +prompt("Введите второе число");
const number3 = +prompt("Введите третье число");
console.log(
  `максимальное среди этих чисел это ${findMax(number1, number2, number3)}`
);

//4 Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

const sum = (numA, numB) => numA + numB;
const product = (numA, numB) => numA * numB;
const quotient = (numA, numB) => numA / numB;
function diff(numA, numB) {
  if (numA > numB) {
    return numA - numB;
  }
  if (numA === numB) return 0;
  else {
    return numB - numA;
  }
}

const numberA = +prompt("Введите первое число");
const numberB = +prompt("Введите второе число");
console.log(`сумма чисел ровна ${sum(numberA, numberB)}
разность чисел ровна ${diff(numberA, numberB)}
произведение чисел ровно ${product(numberA, numberB)}
частное чисел ровно ${quotient(numberA, numberB)}`);

// *5.
// Создать функцию для определения простое число или нет. (не обязательное задание для желающих)

function simplNum(num) {
  if (num > 1) {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i == 0) return alert("Число является составным");
    }
    return alert("Число является простым");
  } else alert("Введите правильное число!");
}

const numb = +prompt("Введите число, чтобы оно было больше 1");
simplNum(numb);
