function tongsole(n)
{
    let s=0;
    for(let i=1;i <=n;i++){

        if(i % 2 != 0){
           s= s+i;
        }
       
    }
    console.log(s)
}
tongsole(5)