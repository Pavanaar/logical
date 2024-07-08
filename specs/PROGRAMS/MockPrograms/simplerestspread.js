let arr=[1,2,3,4]
console.log(...arr);
function add(...num){
    let sum=0
    //console.log(num);
    for(let i=0;i<num.length;i++){
        sum=sum+num[i]
    }
    console.log(sum);
    console.log(num);
    }
    add(6,7)
    add(7,8,9)