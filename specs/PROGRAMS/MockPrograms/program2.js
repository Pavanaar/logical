let string='welcome to coding beauty'
let arr=string.split(' ')
//console.log(arr);
let arr2=[]
arr.map((ele)=>{
   let x=ele.charAt(2)
   if( x=='a'| x=='e'| x=='i'|| x=='o'|x=='u'){
    let str= ele.charAt(0).toUpperCase()+ ele.slice(1)
    //console.log(str);
   arr2.push(str)
   //  console.log(s);

    //return str;
    
   }})
   console.log(arr2);
   console.log(arr2.join(' '))

//  for (let i=0;i<arr.length;i++){
//    let ele=arr[i]
//    if(ele =='a'|| ele=='e'|| ele=='i'|| ele=='o'|| ele=='u'){

//        ele[i].charAt(0).toUpperCase() + ele[i].slice(1)
      
//    }
//    //console.log(s);
// }


