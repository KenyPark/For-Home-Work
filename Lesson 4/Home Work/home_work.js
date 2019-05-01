'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате:', 'YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов:'),
                b = +prompt('Во сколько она обойдётся?');

            if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert('Ваш бюджет на месяц: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка!')
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        } 
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt('Статья необязательных вопросов?', '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        for (let i = 1; i <= 1; i++) {
        let items = prompt('Что принесёт дополнительный доход? (Перечислить ответ через запятую)', '');
            appData.income.push(prompt("Ты ничего не забыл?"));
        
        if ((typeof(items)) == 'string' && (typeof(items)) != null && items != '') {
            console.log('everything is right');
            appData.income = items.split(', ');
        } else {
                i = i - 1
            }
        }
        appData.income.forEach(function(item, i=1) { 
            i++; 
            alert('Способы дополнительного заработка: ' + i + ': ' + item); 
        });
    }
}

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
};