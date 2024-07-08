// // const person={

// //     name :"abc",
// //     age :"23",
// //     "phone num" :"4478346378",
// //     address : ['hbddnfv','hwedje','ewhf'],
// //     details :function det() 
// //     {
// //      console.log(`${this.name} ${this.age}`);
// //     },

// //     spouse :{
// //        name :"df",
// //        age :24
// //     }
// // }


// function person(name,age,details) {
//     this.name=name
//     this.age=age
//     this.details=details
// }
// let data1=new person("afb",34)
// let data2=new person("ghcjx",45)
// let data3=new person("dn",45)
// let data4=new person( "jhghj",789,function details() {
//     console.log(`${this.name}`);
    
// })
// console.log(person.name);
// console.log(person.age);
// console.log(person);
// console.log(person.spouse.age);
// console.log(person.address[0]);
// console.log(person.spouse.name);
// console.log(person["phone num"]);

// console.log(data1.name);
// console.log((data1.age));
// console.log(data4.details);

// class person{
//    constructor(name, age, details){
// this.name=name 
// this.age=age 
// this.details=details
//    }
 
// }
// let  data1=new person('a',23)
// console.log(data1);

let Obj = new Object()
Obj.name='shks'
Obj.age =678
Obj.address=['dbhjns','dhj',890]
console.log(Obj);
console.log(Object.entries(Obj))


//console.log(Obj);
//Obj.hasOwnProperty(678)
Object.hasOwnProperty(Obj)
console.log(Object.toString(Obj))
Object.entries(Obj)
