function kt_snt(n)
{
    let temp = true;
    if (n < 2){
        temp = false;
    }
    else{
        for (let i = 2; i < n; i++)
        {
            if (n % i == 0){
                temp = false;
                break;
            }
        }
    }
    if (temp == true){
        console.log(n + " là số nguyên tố ");
    }
    else{
        console.log(n + " không phải là số nguyên tố ");
    }
}
kt_snt(997)