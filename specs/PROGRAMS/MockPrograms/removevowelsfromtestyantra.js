let str='testyantra'
let str1=''

for(let i=0;i<str.length;i++){
    if(!'aeiou'.includes(str[i])){
        str1=str1+str[i] + '\n'
    }
}
console.log(str1);

