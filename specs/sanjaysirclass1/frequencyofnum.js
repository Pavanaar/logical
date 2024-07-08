let a=[3,1,2,1,5,2,1]
let max=0
let min=[]
for(let i=0;i<a.length;i++){
    let count=0
    for(let j=0;j<a.length;j++){
        if(a[i]==a[j]){
            if(j<i){
                break;
            }
            count++
        }
    }if(count>=0){
        if(max<count){
            max=count
            console.log(`${a[i]} times occures ${max}`);
        }if(min>count){
            min.push(count)
            console.log( `${a[i]} time ocuures ${min}` )
        }
        
    }
    
}