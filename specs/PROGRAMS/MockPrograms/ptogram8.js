let str='AxB5#*eZ45jhjhh40gcg2000'

let sum=0
let num=''
for(let i=0;i<str.length;i++){
    if(!isNaN(parseInt(str[i]))){
       num=num+str[i]
    }else
        {    
             if(!num==' '){
        sum+=parseInt(num);
        num= ''
    }
    }
}   
if (!num =='') {
    sum += parseInt(num);
}

console.log("Sum of the extracted numbers:", sum);











// let str='AxB5#*eZ45jhjhh40gcg2000'
// let s1=''
// let s2=''
// for(let i=0;i<=str.length;i++){
// let x= parseInt(str[i])
// console.log(x);
//     if(x<='0'|| x>='9' ){
//         s1+=str[i]
//     }
//     if(x+(x+1)=='0'| x+(x+1)=='9'){
//          s2+=s1+x
//  }}
//  console.log(s1);
