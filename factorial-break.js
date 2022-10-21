var num = 10;
var rv= num;
var i = num-1;

while(rv){
    rv *= i;
    i--;
    if (i <= 1) break;
}
console.log('El factorial de 10 mediante bifurcacion While e if es :>> ',rv);
