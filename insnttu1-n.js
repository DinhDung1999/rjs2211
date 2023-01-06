function insnt(n)
{  
    for(let x=1;x<=n;x++){
        let temp = true;
    if (x < 2){
        flag = false;}
    
    else{
        for (let i = 2; i < x-1; i++)
        {
            if (x % i == 0){
                temp = false;
                break;
            }
        }
        if (temp == true){
            console.log(x);
            }  
    } 
    }
}
insnt(200);