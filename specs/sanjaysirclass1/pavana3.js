let s='javascriptwebdriverio'
let s1=s.split('')
let a='101101011010110101101'
let res=[]
let a1=a.split('')
for(let i=0;i<a1.length;i++){
    if(a1[i]==1){
        res.push(s1[i].toUpperCase())
    }else{
        res.push(s1[i])
    }
}
console.log(...res)
