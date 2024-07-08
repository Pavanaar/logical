let str="h&el$l%o9" //op :9&ol$l%eh
let s=''
const special= /[^a-zA-Z0-9\s]/g;
// Replace special characters with an empty string
let s1=str.replace(special,'')
console.log(s1);
let c=s1.length-1
for(let i=0;i<str.length;i++){
    if(str[i]>='a' && str[i]<='z' || str[i]>='0' && str[i]<='9'){
        process.stdout.write(s1[c--]);
    }else{
        process.stdout.write(str[i]);
    }
}