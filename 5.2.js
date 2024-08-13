//Сумма пользовательских чисел

let a = +prompt("Укажите число", 0);

let b = +prompt("Укажите число", 0);

alert(a + b);

//Почему 6.35.toFixed(1) == 6.3?
// 6.35 - потеря точности в 65 битной исчеслительнйо системе и из-за этого округляеться в меньшую сторону
alert(Math.round(6.35 * 10) / 10);

//Ввод числового значения

function readNumber () {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num)); 

    if ( num === null || num === '') return null;

    return +num 
};

alert(`"Число": ${readNumber()}`);


//Случайное число от min до max

function random (min , max) {
    return min + Math.random() * (max - min)
}

alert(random (1 , 5));


//Случайное целое число от min до max

function randomInteger (min , max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}

alert(randomInteger (1 , 5));