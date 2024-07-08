let s='hi hello welcome'
let c=s.replaceAll(" ","")
console.log(c);
let j=c.length-1
for(let i=0;i<s.length;i++){
    if(s.charAt(i)!==' '){
           process.stdout.write(c.charAt(j--))
    }else{
        process.stdout.write(s.charAt(i));
    }
}