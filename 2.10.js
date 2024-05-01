if ("0") {
    alert( 'Привет' );
  }
  // true и надпись Привет

//Название JavaScript

let OfficialNameQuestion = prompt("Какое «официальное» название JavaScript?", "")
if (OfficialNameQuestion == "ECMAScript") {
    alert("Верно!")
} else {
    alert("Не знаете? ECMAScript!")
}

//Покажите знак числа

let number = prompt("Введите цифру", "1")
if (number > 0) {
    alert("1")
} else if (number < 0) {
    alert("-1")
} else if (number == 0) {
    alert("0")
}

//Перепишите 'if' в '?'

let result = (a + b < 4) ? 'Мало': 'Много';

//Перепишите 'if..else' в '?'

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
// Переписаный вариант
let message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':
'';

