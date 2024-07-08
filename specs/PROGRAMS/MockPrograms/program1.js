let str='welcome to coding beauty'
let arr=str.split(' ') 
let arr2=[]
console.log(arr);

arr.map((ele)=>{
    let str1 = ele.toString()
    console.log(str1);
    let str2=str1.charAt(0).toUpperCase()+str1.slice(1)
        arr2.push(str2)
    })
    console.log(arr2);
    let string =arr2.join(' ')
    console.log(string);


