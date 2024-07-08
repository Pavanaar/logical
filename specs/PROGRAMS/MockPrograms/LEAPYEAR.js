let d=prompt("enter the value")

function year(n){
    
let leap=new Date(n,1,29).getDate()===29
console.log(leap)
if(leap){
    console.log("leap year")
}else{
    console.log("its not leap year")
}
}
year(d)