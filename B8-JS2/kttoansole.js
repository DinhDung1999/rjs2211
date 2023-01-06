let n = 1357;
let temp=0;
while(n>0) {
    if((n%10)%2 === 0)  {
        temp++;
        break;
    }
    n = parseInt(n/10);
}

if(temp==0) {
    console.log("YES");
} else {
    console.log("NO");
}