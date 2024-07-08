for(let i=1;i<=30;i++){
    let count=0
    for(let j=0;j<=i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count==2){
        console.log(i, "its prime number");
    }
}