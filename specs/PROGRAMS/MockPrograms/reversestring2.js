let s='shikha'
for(let i=s.length-1;i>=0;i--){
   process.stdout.write(s[i])
}

let c=s.split('')
console.log(c);
for(let i=c.length-1;i>=0;i--){
    process.stdout.write(c[i])
}
let rev=''
for(let i=s.length-1;i>=0;i--){
rev=rev+s[i]
process.stdout.write(s[i])
}

