let num = 20;

function showFirstMessage(text) { 
    alert(text);
    console.log(num); 
} 

showFirstMessage('Hellow, world!');
console.log(num);



let calc = function(a, b) {
    return(a + b);
}

let calc = (a,b) => a+b 

console.log(calc(3,4));

console.log(calc(5,7));
 


function retVar() {
    let num = 50;
    return num;
}

let anothrtNum = retVar();
console.log(anothrtNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase()); //переводит буквы в верхний регистр
console.log(str.tpLoverCaser()); //переводит буквы в нижний регистр

let twelve = '12.2px';
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
