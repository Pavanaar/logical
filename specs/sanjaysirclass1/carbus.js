let s='carbustraincarbustrainbus'
let s1=s.split(/[^bus]/)
console.log(s1);
let count=0
for(let i=0;i<s1.length;i++){
if(s1[i].includes('bus')){
    count++
}
   
}
console.log(count);
