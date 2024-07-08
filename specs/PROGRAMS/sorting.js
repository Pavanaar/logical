            let a=[2,4,7,5,8,12,13,19]
           // for(let i =0;i<a.length;i++){
                for(let j=0;j<a.length-1;j++){
                    if(a[j]>a[j+1]){
                        let temp=a[j]
                        a[j]=a[j+1]
                        a[j+1]=temp 
                                       }
                                     
                }
          //  }
            console.log(a);