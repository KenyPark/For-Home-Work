let box = document.getElementById ('box'),
    btn = document.getElementsByTagName ('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


console.log(circle);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i <  heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
});

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.appendChild(div);
wrapper.appendChild(div);

div.innerHTML = '<h1>Hellow, world!</h1>' //добавляем элементы HTML файла
div.textContent = 'Hellow, world!'; //добавляем конкретно, не читаемый как код. 


document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);



console.log(div);
