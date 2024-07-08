console.log(this);
//strict mode or unstrict mode 
//it points toward WINDOW Object

function a() {
    console.log(this); 
}
//it refers to undefined in strict mode
//itrefers to window object in unstrict mode

     ()=>{console.log(this);}
     //strict mode ->window object
     //unstrict mode -->window object

     let obj={
        name :"shk",
        age  :"2"   ,

        function : (b)=>{console.log(this);   //window object 
        console.log(this.age);}    //                    window object & undefined
     }
     console.log(this);
     //object, strict mode refers to object
     //inside object, unstrict mode refers to object


     console.log(this.age);
     //strict mode refers to object property
     //unstrict mode refers to object propert
     
