let s='javaseleniumjavaseleniumjavascriptwdio'
let x=s.split(/[^java]/)//(/[^a-zA-Z0-9\s]/g,"")==>for removing special char
console.log(x)
let count=0
for(let i=0;i<x.length;i++){
    if(x[i]=='java'){
        count++
    }
}
console.log("java",count)