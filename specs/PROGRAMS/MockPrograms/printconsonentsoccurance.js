let str='malayalam'

for(let i=0;i<str.length;i++){
    let count=0
    for(let j=0;j<str.length;j++){
        if(!'aeiou'.includes(str[i]) && str[i] == str[j]){
            if(j<i){
                break
            }
            count++
        }

    }
    if(!count==0){
        console.log(`${str[i]}  the occurance is   ${count}`);
    }
}