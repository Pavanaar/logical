//let arr=[1,2,3,4,12,2,3]
let str='hello wolrd'
let arr=str.split("")
   let numocc= new Map()
   for(let i=0;i<arr.length;i++){
      if(!numocc.has(arr[i])){
        numocc.set(arr[i],1)
      }else{
        numocc.set(arr[i], numocc.get(arr[i])+1)
      
   }
   console.log(numocc);

   //to print the maximum value amongh the repeated onces
   let max=0
       numocc.forEach((count,char)=>{
        if(count>1){
          if(max<char){
            max=char
          }
          console.log(count     +  `===>`+ char)  ;
        }
     
       })
       console.log(max);
    

       //to print the occurance of numbers

      }