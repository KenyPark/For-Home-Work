'use strict'

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате:', 'YYYY-MM-DD'),
    oblExpens = prompt('Введите обязательную статью расходов:'),
    priceOf = prompt('Во сколько она обойдётся?'),
    oblExpens1 = prompt('Введите обязательную статью расходов:'),
    priceOf1 = prompt('Во сколько она обойдётся?'),
    appData = {
    budget: money,
    timeData: time,
    expenses: {}, // oblExpens:priceOf
    optionalExpenses: {},
    income: [],
    savings: false
};

expenses.oblExpens = priceOf;
expenses.oblExpens1 = priceOf1;
let oneDayBudget = ((Number(money) - (Number(priceOf)+Number(priceOf1))/30);
alert('Ваш бюджет на месяц: ' + oneDayBudget);