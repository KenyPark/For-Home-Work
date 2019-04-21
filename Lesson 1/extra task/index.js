var num=33721;
var x=num%10;
var y=1;
while (num>0) {
      num=(num-x)/10;
      y=y*x;
      x=num%10;
}     
console.log(y);
y = y**3;
y = String(y);
alert(y[0]+y[1]);



