
let s='malaYalaM'
let s1=s.toLowerCase()
let c=s1.split('')
console.log(c)
let map=new Map()
for(let i=0;i<c.length;i++){
    if(!map.has(c[i])){
        map.set(c[i],1)
    }else{
        map.set(c[i],map.get(c[i])+1)
    }
}
console.log(map)