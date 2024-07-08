let s='baababc'
let a=[]
for(let i=0;i<s.length;i++){
    let count=0
    for(let j=0;j<s.length;j++){
        if(s[i]==s[j]){
        if(j<i){
            break;
        }
        count++
    }
}
if(count>=1){
    console.log(s[i],count)
    a.push(s[i]+count)
}
}
console.log(a.join(''));