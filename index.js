// // Задание 1: Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// alert("Задача: Подсчитать сумму всех чисел в заданном диапазоне.");
//   let a = Math.trunc(
//     +prompt("Цифра, с которой начинаем считать: ")
//   );
//   let a1 = a;
//   let b;
//   do {
//     b = Math.trunc(
//       +prompt("Цифра, до которой считаем: ")
//     );
//   } while (a >= b);
//   let summa = 0;
//   while (a <= b) {summa += a; a++;}
//   alert(`В диапазоне от ${a1} до ${b} включительно сумма всех чисел составляет: ${summa}.`);

// // Задание 2: Запросить у пользователя 2 числа и найти только наибольший общий делитель.
// alert("Задание 2: Запросить 2 числа и найти только наибольший общий делитель.");
// let n = +prompt("Введите первое число: ");
// let m = +prompt("Введите второе число: ");
// let new_n = Math.abs(n);
// let new_m = Math.abs(m);
// let max_divisor = 1;
// let i = 1;
// while (i <= new_n && i <= new_m) {
//   if (new_n % i == 0 && new_m % i == 0) {max_divisor = i;}i++;}
// alert(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`);

// // Задание 3: Запросить у пользователя число и вывести все делители этого числа.
// alert("Задание 3: Запросить у пользователя число и вывести все делители этого числа.");
//   let n = +prompt("Введите число: ");
//   let new_n = Math.abs(n);
//   let divisors = "";
//   let i = 1;
//   do {
//     if (new_n % i == 0) {
//       divisors += i + ",";
//     }
//     i++;
//   } while (i <= new_n);
//   alert(`У числа ${n} следующие делители: ${divisors}`);

// // Задание 4: Определить количество чисел в введенном числе.
// alert("Задание 4: Определить количество чисел в введенном числе.");
//   let n = Math.abs(+prompt("Введите число: "));
//   let counter = 0;
//   while (n > 0) {n = Math.trunc(n / 10); counter++;}
//   alert(`В введенном вами числе (в его целой части) ${counter} цифр.`);

// Задание 5: Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
// отрицательных и нулей. При этом также подсчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода
// чисел пользователем.
// alert("Задание 5: Введите любые 10 (десять) чисел.");
//   let n = 0;
//   let positive_number = 0;
//   let negative_number = 0;
//   let null_number = 0;
//   let even_number = 0;
//   let odd_number = 0;
//   for (let i = 0; i < 10; i++) {
//     n = +prompt("Введите число: ");
//     if (n > 0) {
//       positive_number += 1;
//     } else if (n < 0) {
//       negative_number += 1;
//     } else {
//       null_number += 1;
//     }
//     !(n % 2) ? (even_number += 1) : (odd_number += 1);
// }
// alert(`Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`)

//   // "Задание 6: Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
//   // вывести результат и спросить,хочет ли он решить еще один пример. И так до тех пор,
//   // пока пользователь не откажется."
//   alert("Что считаем?");
//   let numberA = 0;
//   let numberB = 0;
//   let result = true;
//   let action_sign = "";
//   do {
//     numberA = +prompt("Введите первое число: ");
//     numberB = +prompt("Введите второе число: ");
//     action_sign = prompt("Введите знак операции ( + , - , * , / ): ");
//     switch (action_sign) {
//       case "+":
//         alert(
//           `${numberA} ${action_sign} ${numberB} = ${numberA + numberB}`
//         );
//         break;
//       case "-":
//         alert(
//           `${numberA} ${action_sign} ${numberB} = ${numberA - numberB}`
//         );
//         break;
//       case "*":
//         alert(
//           `${numberA} ${action_sign} ${numberB} = ${numberA * numberB}`
//         );
//         break;
//       case "/":
//         alert(
//           `${numberA} ${action_sign} ${numberB} = ${numberA / numberB}`
//         );
//         break;
//       default:
//         alert(`Вы не ввели знак математической операции!`);
//         break;
//     }
//     result = confirm("Хотите выполнить еще одну математическую операцию?");
//   } while (result == true);

// // Задание 7: Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры
// // числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// alert("Задание 7: Напиши число и на сколько цифр его сдвинуть.");
//     let base_number = prompt("Введите число, которое будем трансформировать: ");
//     let jump = Math.abs(Math.trunc(+prompt("Введите, на сколько позиций вы хотите произвести сдвиг: ")));
//     let arr = base_number.split("");
//     jump = jump % arr.length;
//     let leftJump_L = arr.slice(0, jump);
//     let leftJump_R = arr.slice(jump, arr.length);
// alert(`Сдвиг влево "${base_number}" на ${jump} позиций:  ` + leftJump_R.concat(leftJump_L).join(""));
//     let rightJump_L = arr.slice(0, arr.length - jump);
//     let rightJump_R = arr.slice(arr.length - jump, arr.length);
// alert(`Сдвиг вправо "${base_number}" на ${jump} позиций:  ` + rightJump_R.concat(rightJump_L).join(""));

// // Задание 8: Зациклить вывод дней недели таким образом:"День недели. Хотите увидеть
// // следующий день?" и так до до тех пор, пока пользователь нажимает ОК.
// alert('Какой сегодня день?');
//   let arr_Week = [
//     "Сегодня Понедельник",
//     "Сегодня Вторник",
//     "Сегодня Среда",
//     "Сегодня Четверг",
//     "Сегодня Пятница",
//     "Сегодня Суббота",
//     "Сегодня Воскресенье",
//   ];
//   let i = 0;
//   let stop = true;
//   while (stop == true) {
//     stop = confirm(`${arr_Week[i]}. Выбираем другой день?`);
//     i++;
//     if (i > 6) {i = 0;}
//   }
//   alert("Вывод дней недели окончен!");

// // Задание 9: Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// alert("После согласия выйдет вся таблица умножения, действительно этого хочешь?");
//   let table = "";
//   for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//       table += `${i} x ${j} = ` + i * j + ", ";
//     }
//   }
//   alert(table);

// // Задание 10: Игра "Угадай число". Предложить пользователю загадать число от 0 до 100 и отгадать
// // его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете
// // результат в N и спрашиваете у пользователя "Ваше число > N, < N или == N?". В зависимости
// // от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100,
// // поделили пополаи и получили 50. Если пользователь указал, что его число > 50, то изменили
// // диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

// alert("Игра с журнала КОД");
// alert(
//   "Код найдет любое число в диапазоне от 1 до 100 за 7 попыток включительно."
// );
// let N = 0;
// do {
//   N = Math.trunc(
//     +prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
//   );
// } while (N < 0 || N > 100);
// alert(`Итак, будем играться с числом ${N}.`);

// let counter = 0;
// let low = 0;
// let middle = 0;
// let high = 100;
// let condition = "";
// while (low <= high) {
//   middle = Math.trunc((low + high) / 2);
//   condition = prompt(
//     `Это число ${middle}? Введи "=", если да. Если меньше - "<", если больше - ">".`
//   );

//   if (condition != "=" && condition != "<" && condition != ">") {
//     alert("Писать нужно только  =, < , >");
//     continue;
//   }
//   if (
//     (condition != "=" && middle == N) ||
//     (condition == "<" && middle < N) ||
//     (condition == ">" && middle > N) ||
//     (condition == "=" && middle != N)
//   ) {
//     alert(`Нет, ты загадал другое число!`);
//     continue;
//   }
//   if (condition == ">") {
//     low = middle + 1;
//   } else if (condition == "<") {
//     high = middle - 1;
//   } else {
//     low = high + 1;
//   }
//   counter++;
// }
// alert(`Всего попыток - ${counter}. Загаданное число ${middle}.`);
