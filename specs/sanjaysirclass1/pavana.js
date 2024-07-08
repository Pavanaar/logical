let a=["green","white","red"]  //output:1='green',2='white',3='red'
let b=[1,2,3]
let x=b.shift()
a.unshift(x)
//console.log(a)
let y=b.shift()
a.splice(2,0,y)
//console.log(a)
let z=b.shift()
a.splice(4,0,z)
let s=a.toString()
console.log(a)
for(let i=0;i<a.length;i++){
    console.log(a.replace(',','='))
}


let d=["green","white","red"]
let e=[1,2,3]
let res=""
for(let i=0;i<d.length;i++){
    if(i>0){
        res=res+","
    }
    res=res+(`${e[i]}='${d[i]}'`)
}
console.log(res)