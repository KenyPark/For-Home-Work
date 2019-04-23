'use strict';
let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате:', 'YYYY-MM-DD'),
    oblExpens = prompt('Введите обязательную статью расходов:'),
    priceOf = +prompt('Во сколько она обойдётся?'),
    oblExpens1 = prompt('Введите обязательную статью расходов:'),
    priceOf1 = +prompt('Во сколько она обойдётся?'),
    appData = {
        budget: money,
        timeData: time,
        expenses: {}, // oblExpens:priceOf
        optionalExpenses: {},
        income: [],
        savings: false
};

appData.expenses[oblExpens] = priceOf;
appData.expenses[oblExpens1] = priceOf1;
alert('Ваш бюджет на месяц: ' + ((money - (priceOf + priceOf))/30));





