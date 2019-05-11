'use strict'

let     menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu-item'),
        li = document.createElement('li'),
        title = document.getElementById('title'),
        adv = document.getElementsByClassName('adv')[0],
        ask = prompt('Как вы относитесь к технике apple?'),
        prom = document.getElementById('prompt');  
       
menu.insertBefore(menuItem[2], menuItem[1]);

li.classList.add('menu-item');

document.body.appendChild(li);
menu.appendChild(li);
li.textContent = 'Пятый пункт';

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаём только подлинную технику Apple';

adv.remove();

prom.textContent = ask;






