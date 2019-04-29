'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате:', 'YYYY-MM-DD');

    while(isNaN(money) || money == "" || money = null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();


let    appData = {
        budget: money,
        timeData: time,
        expenses: {}, 
        optionalExpenses: {},
        income: [],
        savings: false
};

function chooseEpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов:'),
            b = +prompt('Во сколько она обойдётся?');
        if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }

}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30;).toFixed(1);

alert('Ваш бюджет на месяц: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
} else {
        console.log('Ошибка!')
}