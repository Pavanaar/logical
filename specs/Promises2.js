//async function execute(){
    
    
    console.log('login to application')
    
   let p2 = new Promise((resolve,reject)=>{
          setTimeout(() => { 
            reject('error')
            resolve('Navigate to home apge');
                                 }
, 2000);
})
// .then((pass)=>{console.log(pass)}).catch((msg)=>{console.log(msg)});


  
        let p3=  new Promise((resolve,reject)=>{
setTimeout(() => { reject('error')
     resolve('get the title')
                       
}, 2000);
        

    })
    // .then((pass)=>{console.log(pass)}).catch((msg)=>{console.log(msg);})
   
   console.log('logout from application')
    

  Promise.all([p2,p3]).then((msg)=>console.log(msg)).catch((error)=>console.log(error));
 Promise.any([p2,p3]).then((msg)=>console.log(msg)).catch((error)=>console.log(error))


    // } 
    
    
    
    



//execute()