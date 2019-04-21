var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате:', 'YYYY-MM-DD');
var oblExpens = prompt('Введите обязательную статью расходов:');
var priceOf = prompt('Во сколько она обойдётся?');
var appData = {
    budget: money,
    timeData: time,
    expenses: {
        oblExpens: priceOf
    },
    optionalExpenses: '',
    income: [],
    savings: false
};
var oneDayBudget = ((money - oblExpens)/30);
alert('Ваш бюджет на 1 день:', oneDayBudget);