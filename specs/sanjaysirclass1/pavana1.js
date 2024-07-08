let a="dbjhDEp"       //optput: p:3
let a1=a.split('')
console.log(a1)
let maxascii=0
let a3
for(let i=0;i<a1.length;i++){
     a3=a1[i].charCodeAt(0)
     //console.log(a3)
    if(maxascii<a3){
     maxascii=a3  
    }
}
console.log(maxascii, String.fromCharCode(maxascii))
