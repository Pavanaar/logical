let string='my name is shikha'
let arr=string.split(' ')
console.log(arr)
//let rev=''
let ar1=[]

for(let i=0;i<arr.length;i++)
{
    let ch = arr[i];    
    if(i%2!==0)
    { 
         let rev = "";
         for(let j=ch.length-1;j>=0;j--)
         {
            rev=rev+ch[j]
        }
        ar1.push(rev);
    }
        
    else
    {
        ar1.push(arr[i]);
    }
}
    // console.log(rev)
    

console.log(ar1)
console.log(ar1.join(' '))