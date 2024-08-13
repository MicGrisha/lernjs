//Задача 1: Проверка палиндрома

function isPalindrome(str) {
    let result = str.toLowerCase().replace(/\s+/g, '');
    let reversed = result.split('').reverse().join('');
    return result === reversed;
};
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Level"));   
console.log(isPalindrome("hello"));

//Задача 2: Среднее арифметическое

function average(numbers) {
    let sum = numbers.reduce (function(a, b) {
        return a + b;
    }, 0);
    let avg = sum / numbers.length;
    return avg
};

console.log(average([1, 2, 3, 4, 5]));
console.log(average([10, 20, 30])); 

//Задача 3: Обратный порядок 

function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedWords = words.reverse();
    let reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}; 
reverseWords("Hello world");
reverseWords("JavaScript is fun");

//Задача 4: Максимальный элемент массива

function maxElement(array) {
    //return Math.max.apply(null, array);
    return Math.max(...array);
};

maxElement([1, 2, 3, 4, 5])
maxElement([-10, 20, -30])

//Задача 5: Найти самое длинное слово

function longestWord(sentence) { 
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
    };
};
return longest
};
console.log(longestWord("The quick brown fox jumps over the lazy dog"));
console.log(longestWord("JavaScript is amazing"));


//Задача 6: Фильтрация массива

function filterArray(numbers, threshold) {
    let filters = numbers.filter(item => item > threshold);
    return filters
}; 
filterArray([1, 2, 3, 4, 5], 3);
filterArray([10, 20, 30], 15);


// Задача 7: Объединение и сортировка массивов

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  };
  

function mergeAndSort(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    arr.sort(compareNumeric)
    return arr
};

mergeAndSort([3, 1, 4], [5, 2, 8]);
mergeAndSort([7, 9], [2, 6, 4]); 

//Задача 8: Сумма цифр числа

function sumDigits(number) {
    let Digits = number.toString().split('')
    let sum = 0

    for (let char of Digits) {
        sum += parseInt(char);
    }
return sum
};

console.log(sumDigits(123)); // 6 (1 + 2 + 3)
console.log(sumDigits(456)); // 15 (4 + 5 + 6)

//Задача 9: Проверка уникальности элементов массива

function isUnique(array) {
    for (let key of array) {
        
    }
};
