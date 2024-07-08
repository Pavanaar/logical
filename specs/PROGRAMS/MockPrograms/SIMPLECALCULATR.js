let d=prompt("enter first value")
let c=prompt("enter the second value")
let e=prompt("enter the operation")
if(e=='+'){
    console.log(`the sum is : ${parseInt(d)+parseInt(c)}`)
}else if(e=='-'){
    console.log("the difference is :", d-c)
}else if(e=='*'){
    console.log("the product is :", d*c)
}else if(e=='/'){
    console.log("the mode is :", d/c)
}