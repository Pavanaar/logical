const person = {name :"jhon"}

function greet(greeting,welcome){
    console.log(`hello${this.name}!`);//
   console.log(`${greeting}, ${this.name}, ${welcome}`);
}
greet.call(person) //call
greet.apply( person,['hi','bye']) //apply

//bind
 let greetperson = greet.bind(person)
   console.log(greetperson);
    greetperson();
    // function a(callback) {
    //     //console.log(`${this.name}`);
    //     callback()
    //     //console.log(`${this.name}`);
    // }
    // a(greetperson)

 