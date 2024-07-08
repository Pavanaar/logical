let arr= [35,45,15,20,40,56,13]
for(let i=0;i<arr.length;i++){
if(arr[i]%2=='0'  && arr[i]%3=='0'){
    console.log(arr[i] + 'webdriverio');
}else 
if(arr[i]%3=='0'){
    console.log('javascript');
}else if(arr[i]%2=='0'){
    console.log('java');
}else{
    console.log(arr[i]);
}
}