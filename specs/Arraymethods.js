
//REMOVEDUPLICATESUSING FILTER METHOD

// let a=[1,2,3,4,5,15,1,2,3]
 
// //using filter method
// function removedep(a){
//     return a.filter((value,index)=>a.indexOf(value)===index)
// }
// console.log(removedep(a))


//REMOVE DUPLICATE USING MAP METH0D

let a1=[1,1,2,2,3,3,4,4]

function removedup(a1){
    let a =[]
    let count=0
    a1.map((x) => {
        if(!a.includes(x)){
        a.push(x)
            count++
        }if(count>1){
        console.log(`count is :${count} ===> ${x}`);  
 } })
  
    return a

}
console.log(removedup(a1)  )


// let a3=[1,2,3,1,2,3,1,2,3,3]
// let a4=[...new Set(a3)]
// console.log(a4);