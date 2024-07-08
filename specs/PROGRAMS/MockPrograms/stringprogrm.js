let s='India'

let count=0
let s1=s.toLowerCase()
let c=s1.split('')
console.log(c)

for(let i=0;i<s1.length;i++){
    if('aeiou'.includes(s1[i])){
         count++
      
    }
}
console.log(count);
// let c1=[]
// c.filter((ele)=>{
//     if('aeiou'.includes(ele)&& !c1.includes(ele)){
//         c1.push(ele)
//         count++
//     }
// })
// console.log(count);
// console.log(c1);
let a1=new Set(c)
console.log(a1);
for(let i=0;i<a1.length;i++){
    if('aeiou'.includes(a1)){
        count++
    }
}
console.log(count);