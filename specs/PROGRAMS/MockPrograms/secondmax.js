
// let a=[1,2,3,4,5]
// let max1=a[0]
// let max2=a[1]
// for(let i=0;i<a.length;i++){
//     if(a[i]>max1){
//         max2=max1
//         max1=a[i]
//     }else if(a[i]>max2 && a[i]!==max1){
//         a[i]= max2
//     }
// }
// console.log(max1,max2)
let obj={
    name:"shikha",
    greet: function(){
        setTimeout(()=>{
            console.log(`${this.name}`)
        },1000)}
    
}

obj.greet()