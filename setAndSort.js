//Принимает строку и возвращает массив начиная с самого большого слова и к самому маленькому 

function longestWord(srt) {
    let words = srt.split(' ');
    words.sort((a, b) => b.length - a.length);
    return words
};
console.log(longestWord("The quick brown fox jumps over the lazy dog"));

let words = (str) => str.split(' ').sort((a, b) => b.length - a.length);
console.log(words("The quick brown fox jumps over the lazy dog"));

//Сделать функцию, которая принимает в себя массив и возвращает только уникальныйе значения в массиве


function getUniqueValues(arr) {
    const uniqueArray = [...new Set(arr)];
    return uniqueArray
  }
  
console.log(getUniqueValues([2, 6, 6, 5, 1, 2, 3, 4, 4]));

//Подсчет частоты слов в строке (используя Map)
function map(srt) {
  let words = srt.split(' ');
  let uniqueValue = new Map();
  for (let word of words) {
    // Если слово уже есть в Map, увеличиваем значение на 1
    if (uniqueValue.has(word)) {
      uniqueValue.set(word, uniqueValue.get(word) + 1);
    } else {
      // Если слова нет в Map, добавляем его со значением 1
      uniqueValue.set(word, 1);
    };
};
return uniqueValue
};
console.log(map("hello world hello"));

//Пересечение множеств (используя Set)

function getUniqueValues(arr, arr1) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}; 
console.log(getUniqueValues([1, 2, 3, 4, 5, 2, 3, 1, 4], [6, 7, 8, 9, 10, 4, 2, 3]));