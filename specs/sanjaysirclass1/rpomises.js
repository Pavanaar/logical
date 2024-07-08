console.log("login to application")
let p=new Promise((resolve,reject)=>
                     setTimeout(() => {
                      resolve( "welocome to home page")
                      reject("error")
}, 2000)
)
p.then((msg)=>{console.log(msg)}).catch((e)=>{console.log(e)})
console.log("logout from application")