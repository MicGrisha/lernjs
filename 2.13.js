//Последнее значение цикла
let i = 3;

while (i) {
  alert( i-- );
}
//1 циклы дойдудт до 0. 0 = false и он его не выведет 

//Какие значения выведет цикл while?
let i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4 (почему нет 5?)

let i = 0;
while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5 (почему нет 0?)

//Какие значения выведет цикл for?
for (let i = 0; i < 5; ++i) alert( i ); //0-4

for (let i = 0; i < 5; i++) alert( i ); // 0-4

//Выведите чётные числа
for (let i=0; i<10; i++) {
    if (i % 2 == 0) 
    alert(i)
}
//Замените for на while
/*for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
let i = 0*/
while (i < 3) {
    i++;
    alert( `number ${i}!` );
}

//Повторять цикл, пока ввод неверен
let number
do {
    number = prompt ("Введите число больше 100","")
    if (number >= 100) break;
    if (number === "") break;
    if (number === null) break;
} while (number < 100) // (number >= 100 && number) - условие, которое сокращает мой код. Цикл проверяет пока число меньше 100 или пока numer = true 

//Вывести простые числа

let n = 10

nextPrime:
for (let i =2; i <= n; i++) {
   for (let j = 2; j<i; j++) {
    if ( i % j == 0) continue nextPrime;
   }
    alert(i)
}