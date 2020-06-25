// Задание 1:
// Запросите у пользователе ввести значение;
// Введенное значение равно 10, то выведите 'Верно', иначе выведите 'Неверно'.

let question = Number(prompt('Введите число'));

let answer = question === 10 ? 'Верно' : 'Неверно';

console.log(answer);

// Задание 2:
// Пользователь вводит в текстовое поле имя. Если введенное имя Jonh — то выводится сообщение «Привет Jonh». В противном случае — ничего не выводить.

let userName = prompt('Ваше имя');


if(userName === 'John') {
    console.log(`Привет ${userName}`);
}

// Задание 3:
// Запросите у пользователе ввести значение от 0 до 59;
// Определите в какую четверть часа попадает это число (в первую (0-15), вторую (15-30), третью (30-45) или четвертую (45-59)).

let c = Number(prompt('Введите число от 0 до 59'));

if(c === 0 && c <= 15) {
    console.log('Первая четверть');
} else if(c <= 30) {
    console.log('Вторая четверть');
} else if(c <= 45) {
    console.log('Третья четверть');
} else if(c <= 59) {
    console.log('Четвертая четверть');
} else {
    console.log('Неверное значение');
}

// Задание 4:
// Создайте 2 переменные (a,  b);
// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let a = 1;
let b = 3;

if(a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

// Задание 5:
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

let num = 1;
let result;

switch(num) {
    case 1:
         result = 'Зима';
        break;
    case 2:
         result = 'Весна';
        break;
    case 3:
         result = 'Лето';
        break;
    case 4:
         result = 'Осень';
        break;
    default: result = 'Неверное значение';
}

console.log(result);

// Задание 6:
// Пользователь вводит в имя и — пароль. Если пользователь ввел:
// ivan - 333 или
// ssss - 666 или
//  gibs - 0000
// То вывести — «Доброе пожаловать», в противном случае: «Пользователь не найден».

let login = prompt('Введите логин');
let pass = Number(prompt('Введите пароль'));

if(login === 'ivan' && pass === 333) {
    console.log('Доброе пожаловать');
} else if(login === 'ssss' && pass === 666) {
    console.log('Доброе пожаловать');
} else if(login === 'gibs' && pass === 0000) {
    console.log('Доброе пожаловать');
} else {
    console.log('Пользователь не найден');
}
// Второе решение задачи
// console.log(login === 'ivan' && pass === 333 || login === 'ssss' && pass === 666 || login === 'gibs' && pass === 0000 ? 'Доброе пожаловать' : 'Пользователь не найден');

// Задание 7:
// Cоздать программу, которая будет проверять, достиг ли пользователь 21 года.
// Если да, программа выведет «You may enter», если нет, она выведет в консоль «You may not enter». Используйте тренарный оператор.

let age = Number(prompt('Your age'));

console.log(age >= 21 ? 'You may enter' : 'You may not enter');

// Задание 8:
// Пользователь вводит 3 числа. Найти максимальное. Учесть вариант равенства чисел.

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let num3 = +prompt('Введите третье число');

let minNum = num1;

if (num2 < minNum) {
    minNum = num2;
} else if (num3 < minNum) {
    minNum = num3;
} else if (num1 === num2 && num2 === num3) {
    minNum = 'Все числа равны';
}

console.log(minNum);

// Задание 9:
// Пользователь вводит 3 числа. Найти минимальное и максимальное. Учесть вариант равенства чисел.

let val1 = +prompt('Введите первое число');
let val2 = +prompt('Введите второе число');
let val3 = +prompt('Введите третье число');

let minVal = val1;
let maxVal = val1

if (val2 < minVal) {
    minVal = val2;
} else if (val3 < minVal) {
    minVal = val3;
} else if (val1 === val2 && val2 === val3) {
    minVal = 'Все числа равны';
}
if (val2 > maxVal) {
    maxVal = val2;
} else if (val3 > maxVal) {
    maxVal = val3;
} else if (val1 === val2 && val2 === val3) {
    maxVal = 'Все числа равны';
}


console.log(minVal, maxVal);



// Задание 10:
// Cоздать приложение для выставления оценок и перевода их из 12 бальной в 5-ти бальную. Приложение должно следовать таким условиям:

// 10 и свыше – 5.
// 7-9 баллов – 4.
// 5-6 баллов – 3.
// 3-5 баллов – 2.
// 2 бала и ниже – 1.

// Перевод дожен учитывать невалидную оценку и выбрасывать оповещение об ошибке.

let rating = Number(prompt('Оцените фильм \'Django\' от 0 до 12'));

if(rating === 0 && rating <= 2) {
    console.log(1);
} else if (rating < 5) {
    console.log(2);
} else if (rating <=6) {
    console.log(3);
} else if (rating <= 9) {
    console.log(4);
} else if (rating <= 12) {
    console.log(5);
} else {
    console.log('Неверная оценка');
}