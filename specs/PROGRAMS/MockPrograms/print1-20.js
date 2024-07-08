let num=20
for(let i=1;i<=num;i++){
    if(i%2==0 && i%3==0){
        console.log( i  , 'webdriverio')
    }
     else if(i%3==0){
        console.log(i  ,'javascript')
    }
      else if(i%2==0 ){
        console.log(i,'java')
    }else{
        console.log(i)
    }
}