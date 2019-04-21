var x=num%10;
var y=1;
while (num>0) {
      num=(num-x)/10;
      y=y*x;
      x=num%10;
      alert(y);
}
pow(y, 3);