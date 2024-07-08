let a=[22,13,44,55,66]
for(let i=0; i<a.length;i++){
    count=0
    for(let k=1;k<=a[i];k++)
{
    if(a[i]%k==0){
        count++;
    }

}
if(count==2){
    console.log(a[i]);
}
} 