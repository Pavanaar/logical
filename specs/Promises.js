//promises
    function execute(){
    
    
    console.log('login to application')
    let p = new Promise((resolve,reject)=>{
          setTimeout(() => { resolve('Navigate to home apge');
                                 reject('error')}
, 2000);
    });
   p.then((pass)=>{console.log(pass)}).catch((msg)=>{console.log(msg)});


    p.then(()=>{ 
        let p1= new Promise((resolve,reject)=>{
setTimeout(() => { resolve('get the title')
                        reject('error')
}, 2000);
        

    }).then((pass)=>{console.log(pass)})
     p1.catch((msg)=>{console.log(msg);})
    }).then(()=>{console.log('logout from application')
})
}
execute()

console.log('login to application');

let p1=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve('naviagte to home page')
    reject('error')
}, 2000);
})
p1.then((msg)=>{console.log(msg);}).catch((error)=>{console.log(error);})



console.log('logout');

