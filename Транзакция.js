const transactions = [
    { id: 1, amount: 1500, type: "income", category: "salary" },
    { id: 2, amount: -50, type: "expense", category: "food" },
    { id: 3, amount: -200, type: "expense", category: "entertainment" },
    { id: 4, amount: 100, type: "income", category: "freelance" },
    { id: 5, amount: -20, type: "expense", category: "transportation" }
];
//Возвращает общий баланс пользователя (сумма всех amount)
function getBalance(transactions) {
    let Balance = transactions.reduce((sum, value) => sum + value.amount, 0);
    return Balance
};

console.log(getBalance(transactions));

//Принимает массив транзакций и категорию, возвращает массив транзакций, относящихся к этой категории.
function filterByCategory(transactions, category) {
    let filterCategory = transactions.filter(item => item.category === category)
    return filterCategory;
};

console.log(filterByCategory(transactions, "food"));

//Возвращает объект с самой крупной транзакцией.
function getLargestTransaction(transactions){
    let sortTransaction = transactions.sort(function(a, b) { 
        if (a.amount > b.amount) {
        return 1;
      }
      if (a.amount < b.amount) {
        return -1;
      }
      // a должно быть равным b
      return 0; }
    );
    
    let bigTransaction = sortTransaction.slice(-1);
    return bigTransaction
};

/*Более быстрое решение с поиском максимального
function getLargestTransaction(transactions) {
    return transactions.reduce((max, current) => (current.amount > max.amount ? current : max));
}

console.log(getLargestTransaction(transactions));
{ id: 1, amount: 1500, type: "income", category: "salary" }*/


console.log(getLargestTransaction(transactions));