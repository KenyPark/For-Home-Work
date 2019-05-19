'use strict' 

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    expIt = document.getElementsByClassName('expenses-item'),
    expBtn = document.getElementsByTagName('button')[0],
    optBtn = document.getElementsByTagName('button')[1],
    cntBtn = document.getElementsByTagName('button')[2],
    expInp = document.querySelectorAll('.optionalexpenses-item'),
    chInc = document.querySelector('.choose-income'),
    chBox = document.getElementById('savings'),
    sumValue = document.querySelector('.choose-sum'),
    percValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

startBtn.addEventListener('click', function(){
    
    time = prompt('Введите дату в формате:', 'YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

//вписываем обязательные расходы
expBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expIt.length; i++) {

        let a = expIt[i].value,
            b = expIt[++i].value;

        if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expenses.textContent = sum;
    expenses = sum;
});

//вписываем необязательные расходы
optBtn.addEventListener('click', function(){
    for (let i = 0; i < expInp.length; i++) {
                let opt = expInp[i].value;
                    appData.optionalExpenses[i] = opt; 
                    optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
                } 
});



cntBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - expenses) / 30).toFixed(1),
    daybudget.textContent = appData.moneyPerDay;

//определяем уровень достатка
    if (appData.moneyPerDay < 100) {
                        level.textContent = 'Минимальный уровень достатка';
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    level.textContent = 'Средний уровень достатка';
                } else if (appData.moneyPerDay > 2000) {
                    level.textContent = 'Высокий уровень достатка';
                } else {
                    level.textContent ='Ошибка!';
                }
    }  else {
        daybudget.textContent = 'Произошла ошибка!';
    }
});



chInc.addEventListener('change', function(){
    let items = chInc.value;
    appData.income = items.split(', ');
    income.textContent = appData.income;
});

chBox.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
       let  sum = +sumValue.value,
            percent = +percValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percValue.addEventListener('input', function(){
    if (appData.savings == true) {
      let   sum = +sumValue.value,
            percent = +percValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let    appData = {
        budget: money,
        timeData: time,
        expenses: {}, 
        optionalExpenses: {},
        income: [],
        savings: false
};
