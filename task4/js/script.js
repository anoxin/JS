/* Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 == 0) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }

}

/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
 */

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

/* Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

let newArr = [];
for (let i = 0; i < 5; i++) {
  newArr.push(Math.floor(Math.random() * 9));

}

let findNum = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return `${num} такое число есть`;
    }

  }
  return `${num} такого числа нет`;
}

console.log(newArr);
console.log("sum = " + newArr.reduce((sum, a) => sum + a));
console.log("min = " + Math.min(...newArr));
console.log(findNum(newArr, 3));


/* Задание 4
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx*/

for (let i = 0; i < 20; i++) {
  console.log("x" + "x".repeat(i));

}