let num = 2678762;
let number=num;
let numdx = 0;
while (number>0) {
    var temp = number%10;
    numdx = numdx*10 +temp;
    number = Math.floor(number/10);
}
if(numdx === num) console.log("YES");
else console.log("NO");
