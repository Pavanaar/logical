let n=10
for(let i=1;i<5;i++){
    for(let j=5-i;j>0;j--){
        process.stdout.write(String(n))
        n--
    }
    console.log(" ")
}