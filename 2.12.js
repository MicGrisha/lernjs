//Что выведет этот код?
alert(undefined ?? NaN ?? null ?? "" ?? " "); //NaN

//Какой будет результат выполнения этого кода?
let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); /* "Берлин" это будет первое определенное значение которое присвоится и все отсальные уже не присовются. 
То есть, после присвоения "Берилин", переменная будет определна и другие присвоения не сработают*/

//Перепишите код используя операторы ??, ??=
let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2
