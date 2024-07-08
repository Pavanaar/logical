 function execute()
 {
console.log('login to application')

 let p1=new Promise((resolve,reject)=>{

    setTimeout(() => {
                resolve('navigate to home page')
                reject('error')
    }, 1000);
 })
 p1.then((msg)=>{console.log(msg)}).catch((error)=>console.log(error))
 
 .then(()=>{let p2= new Promise((resolve,reject)=>{
        setTimeout(() => {
                    resolve('click on element')
                    reject('error')
        }, 1000);
     })
p2.then((msg)=>console.log(msg)).catch((error)=>console.log(error))

     .then(()=>{console.log('logout from application')})
   })
}
    execute()