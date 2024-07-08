let string ='MmAaBb'
for(let i=0;i<string.length;i++){
    let count=0
    for(let j=0;j<string.length;j++){
        if(string[i]==string[j]){
            if(j>i){
                break;
            }
            count++
        }
    }
    if(count>0){
        console.log(count  +  string[i]);
    }
}