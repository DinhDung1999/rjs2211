
let a =10;
let b =20;
let c=30;
let del = `${(b*b) - (4*a*c)}`;

if(del >0){
    x1= (-b + Math.sqrt(del))/ (2*a);
    x2= (-b - Math.sqrt(del))/ (2*a);
    console.log(`${x1}, ${x2}`)
    }
else if(del === 0){
    x1 = -b/ (2*a);
    x2 = x1;
    // x1 = -b/ (2*a);
    console.log(`${x1} and ${x2}`);
    //console.log(`x1=x2= ${x1}`);
}
else {

}

