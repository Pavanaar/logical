let n=5;
for(let i=0,j=0;i<n;){
    if((i+j)>=n-1){
        process.stdout.write("*");
        j++;
    }else{
        i++;
        console.log();
        j=0
    }
}