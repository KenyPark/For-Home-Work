'use strict';
let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате:', 'YYYY-MM-DD'), 
    appData = {
        budget: money,
        timeData: time,
        expenses: {}, 
        optionalExpenses: {},
        income: [],
        savings: false
};

let i = 0;
while (i<2) {
        let     a = prompt('Введите обязательную статью расходов:'),
                b = +prompt('Во сколько она обойдётся?');
        if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
              && a != '' && b != '' && a.length < 50 ) {
                console.log('done');
                appData.expenses[a] = b;
        }
i++;
}
appData.moneyPerDay = appData.budget / 30;

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






