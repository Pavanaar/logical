  function add(a,b) {
    console.log(`the sum is ${a+b}`);
    
  }
  function sub(a,b) {
    console.log(`the sub is ${a-b}`);
    
  }
  function perform(data1,data2,callback1,callback2) {
           
    console.log('this action has to be performed first');
    setInterval(() => {
        
        callback1(data1,data2)
    }, 1000);

    setTimeout(() => {
        callback2(data1,data2)
    }, 2000);
    
  }
  perform(7,3,add,sub)

  // function performactions(callback1,callback2,callback3) {
  //   console.log(`the action begins`);
  //   callback1()
  //   callback2()
  //   callback3()
  // }
  // function action1() {
  //   console.log(`gaming starts`);
    
  // }
  // function action2() {
  //   console.log(`gaming ends`);
    
  // }
  // function action3(x,y) {
  //   console.log(x+y);
    
  // }
  // performactions(action1,action2,action3)