/*
//Привет, object
let user = {};
user.name = "Johan";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Проверка на пустоту (добавил ссылку в объект и все равно тру)
let obj = {} //так будет false
function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}
console.log(isEmpty(obj))

//Объекты-константы?
const user = {
    name: "John"
  };
  
  // это будет работать? - Да 
  user.name = "Pete";

//Сумма свойств объекта (вроде работает)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function salaryAmount(salaries) {
    let sum = 0;
    for (let key in salaries){
        sum += salaries[key]
    }
    return sum
  }
console.log(salaryAmount(salaries))


//Умножаем все числовые свойства на 2 
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  function multiplyNumeric(menu) { 
    for(let key in menu) {
        if(typeof menu[key] === "number") {
            menu[key] *=2;
        }
    }
    // в функции мы вызываем цикл с переменной key. 
    //Цикл присвает key значение из объекта. 
    //Потом по этому значению идет проверка на тип и если тип номер, то он умножается на два. 
    //Дальше цикл повоторяется, пока в объекте есть, что перебирать
  };
  multiplyNumeric(menu);
  console.log(menu)

*/

//Доп задачи 
// Создать библиотеку 

let library = {
    books: [],

    addBook: function(title, author, year) {
        this.books.push({ title, author, year, isAvailable: true });
    },

    removeBook: function(title) {
        this.books = this.books.filter(book => book.title != title);
    },

    checkoutBook: function(title) {
        const book = this.books.find(book => book.title === title);
        if (book && book.isAvailable) {
            book.isAvailable = false;
        }
    },

    returnBook: function(title) {
        const book = this.books.find(book => book.title === title);
        if (book && !book.isAvailable) {
            book.isAvailable = true;
        }
    },
};

library.addBook('Братство Кольца', 'Дж. Р. Р. Толкиен', 2006);
library.addBook('Две крепости', 'Дж. Р. Р. Толкиен', 2007);
library.addBook('Возвращение короля', 'Дж. Р. Р. Толкиен', 2008);

console.log(library.books);

library.checkoutBook('Две крепости');
console.log('После выдачи:', library.books);

library.returnBook('Две крепости');
console.log('После возврата:', library.books);


let student = {
    name: 'Вася',
    age: 18,
    grade: 5,
}

function printInfo(student) {
    console.log("Имя:" + student.name, "Возраст:" + student.age, "Класс:" + student.grade)
}

printInfo(student);


let bankAccount = {
    owner: "Генадий",
    balance: 100000,

    deposit: function() {
        let sum = prompt('Введите сумму', 200);
        this.balance += parseInt(sum);
    },

    withdraw: function() {
        let sum = prompt("Снемите нужную сумму", 100);
        sum = parseInt(sum);
        if (sum <= this.balance) {
            this.balance -= sum;
        } else {
            console.log("Недостатточно средств")
        }
    }
}

bankAccount.deposit();
console.log("Текущий баланс счета после депозита:", bankAccount.balance);

bankAccount.withdraw();
console.log("Баланс после снятия:", bankAccount.balance);