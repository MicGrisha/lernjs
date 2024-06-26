//Использование "this" в литерале объекта

function makeUser() {
    return {
        name: "John",
        ref: this
      };
    }
    
    let user = makeUser();
    
    alert( user.ref.name ); // ошибка, но не очень понял почему

//Создайте калькулятор

let calculator = {
  read() {
    this.a = +prompt("a?", 1);
    this.b = +prompt("b?", 2);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Цепь вызовов

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

//cloneDeep (Пока понял, как проверили и копировали примитивы)


function ownCloneDeep(obj) {
    const newObj = {}

    if (obj === null) {
        return null
    }

    if (Array.isArray(obj)) {
        return obj.map(item => typeof el === "object" ? ownCloneDeep(item) : item)
    }

    for (let key in obj) {
        typeof obj[key] === "object" ? newObj[key] = ownCloneDeep(obj[key]) : newObj[key] = obj[key]
    }

    return newObj
}

console.log(ownCloneDeep(user))


// Улучшаем калькулятор 

let extendedCalculator = {
    a: 0,
    b: 0,
    resultValue: 0,

    read() {
      this.a = +prompt("a?", 1);
      this.b = +prompt("b?", 2);
      this.resultValue = this.a
    },
  
    sum() {
     this.resultValue += this.b;
     return this;
    },
  
    mul() {
        this.resultValue *= this.b;
        return this;
    },

    sub() {
        this.resultValue -= this.b;
        return this;
    },

    div() {
        if(this.b === 0) {
            return "Ошибка: деление на ноль"
        }
        this.resultValue /= this.b;
        return this;
    },

    reset() {
        this.a = 0;
        this.b = 0;
        this.resultValue = 0
        return this;
    },

    getResult() {
        return this.resultValue
    },
  };
