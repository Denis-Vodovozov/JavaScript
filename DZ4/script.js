//1 Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число...

for (let i = 0; i <= 10; i++) {
  if (i == 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 !== 0) {
    console.log(`${i} - нечетное число`);
  } else {
    console.log(`${i} - четное число`);
  }
}

//2 Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice (3,2);
console.log (arr);

// 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  numbers.push(getRandomInt(0, 9));
  sum += numbers[i];
}
let minNum = Math.min(...numbers);

console.log(numbers);
console.log(`сумма элементов массива ${sum}`);
console.log(`минимальное число ${minNum}`);
console.log(numbers.includes(3));

//4 Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:

let gorka = "x";
for (let i = 20; i > 0; i--) {
  console.log(gorka);
  gorka = gorka + "x";
}

//5 Построить таблицу умножения как в тетрадках от 2 до 9 (Не обязательное)

for (let i = 2; i <= 9; i++) {
  console.log(`таблица умножения для числа ${i}`);
  for (let j = 2; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}