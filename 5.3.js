//Сделать первый символ заглавным

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("вася") );

  //Проверка на спам

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  };

  alert(checkSpam("GFGFG viagra"));
  alert(checkSpam("lfdkfdk XXX lflfdldf"));
  alert(checkSpam("lfdkfdk adfasf lflfdldf"));

  //Усечение строки

  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…': str;
  }


  //Выделить число 

  function extractCurrencyValue(str) {
    return +str.slice(1);
  };

  alert (extractCurrencyValue("$552"));