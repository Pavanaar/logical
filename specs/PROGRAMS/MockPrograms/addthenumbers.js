// let s='a2b4c1'
// let sum=0
// for(let i=0;i<s.length;i++){

//     if(!isNaN(parseInt(s[i]))){
// sum=sum+parseInt(s[i])
//     }

// }
// console.log(sum);
let s1='a2b&3d$5'
let num=''
let char=''
let special=''
for(let i=0;i<s1.length;i++){
    if(!isNaN(parseInt(s1[i]))){
          num=num+parseInt(s1[i])
    }else if(s1[i]>='a' && s1[i]<='z'){
           char=char+s1[i]
    }else{
        special=special+s1[i]

    }
}
console.log(num);
console.log(char);
console.log(special)
console.log(char, num, special)