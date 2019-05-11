'use strict'
//Получаем кнопку 'Начать расчёт'; 
let start = document.getElementById('start'),
    //Получаем блоки value
    budget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
// Получаем поля input с обязательными расходами
    expIt = document.getElementsByClassName('expenses-item'),
    // получаем кнопки 'утвердить' и 'расчитать'
    expBtn = document.getElementsByTagName('button')[0],
    optBtn = document.getElementsByTagName('button')[1],
    cntBtn = document.getElementsByTagName('button')[2],
    //получаем поля для ввода необязательных расходов
    expInp = document.querySelectorAll('optionalexpenses-item'),
    //получаем оставшиеся поля 
    chInc = querySelector('choose-income'),
    chBox = querySelector('savings'),
    sum = querySelector('sum'),
    perc = querySelector('choose-percent'),
    year = querySelector('year-value'),
    month = querySelector('month-value'),
    day = querySelector('day-value');

    

