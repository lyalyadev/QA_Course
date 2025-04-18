/*1. Перевірка масиву
 Напиши функцію, яка перевіряє, чи є input масивом.
    Тестові дані:
    console.log(isArray('QA DOJO')); // false
console.log(isArray([1, 2, 4, 0])); // true    */

import {Page} from "@playwright/test";

const input = [1, 2, 4, 0]

function IsArray (page: Page){



}



/*
> Senpai:
    ДЗ №9 функці/масиви

1️⃣ Перевірка масиву
✏️ Напиши функцію, яка перевіряє, чи є input масивом.
    Тестові дані:
    console.log(isArray('QA DOJO')); // false
console.log(isArray([1, 2, 4, 0])); // true

2️⃣ Клонування масиву
✏️ Напиши функцію для створення копії масиву.
    Тестові дані:
    console.log(cloneArray([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(cloneArray([1, 2, [4, 0]])); // [1, 2, [4, 0]]

3️⃣ Перші елементи масиву
✏️ Напиши функцію для отримання перших n елементів масиву.
    Тестові дані:
    console.log(first([7, 9, 0, -2])); // 7
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]

4️⃣ Останні елементи масиву
✏️ Напиши функцію для отримання останніх n елементів масиву.
    Тестові дані:
    console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]

5️⃣ Об’єднання елементів масиву
✏️ Напиши програму, що об'єднує елементи масиву у строку.   (гугліть як це зробити)
Приклад:
    myColor = ["Red", "Green", "White", "Black"];
// "Red,Green,White,Black"
// "Red+Green+White+Black"

6️⃣ Дефіси між парними числами
✏️ Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
Приклад:
    Ввід: 025468
Вивід: 0-254-6-8

7️⃣ Сортування масиву
✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
Приклад:
    var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// Вивід: -4,-3,1,2,3,5,6,7,8
ЦИКЛИ

8️⃣ Числа від 1 до 345
✏️ Використай цикл, щоб  щоб створити масив з числами  від 1 до 345.

9️⃣ Сума чисел від 1 до 100
✏️ Напиши програму, яка знайде суму чисел від 1 до 100.

🔟 Числа від 241 до 1
✏️ Використай цикл, щоб створити масив з числами у зворотному порядку від 241 до 1.

1️⃣ 1️⃣ Максимальне число з двох
✏️ Напиши програму, яка знаходить найбільше ціле число з двох. Використай if для порівняння.

maxNumber(10, 20); // Вивід: 20
maxNumber(5, 5); // Вивід: Обидва числа рівні
maxNumber(-10, 0); // Вивід: 0

⭐️Покрий код тестами! Перевір свій код за допомогою різних пар чисел
*/
