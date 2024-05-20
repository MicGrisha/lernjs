//Обязателен ли "else"?
//Работают одинаково, но я не понял почему

//Перепишите функцию, используя оператор '?' или '||'

function checkAge(age > 18) {
    return (age > 18) || confirm('Родители разрешили?') 
}

function checkAge(age) {
   return (age > 18) ? true : confirm('Родители разрешили?')
}

//Функция min(a, b)
function getMin(a,b) {
    return (a<b) ? a : b
}

//Функция pow(x,n) 

let x = prompt('', 1);
let n = prompt('', 1);

function getPow (x,n) {
    let result = x

    for (let i=1; i<n; i++){
        result *= x;
    }
   return result;
}

if (n >= 1 && n % 1 == 0) {
    alert(getPow(x,n));
} else {
    alert(`Степень ${n} не верная`)
}