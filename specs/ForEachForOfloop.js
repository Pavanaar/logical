// // //arr=[1,2,3,4,5,6]
//  const array = [1, 2, 3, 4, 'a'];

// for (
//     const iterator of array) {
//    // console.log(iterator  , array[iterator]);
//     console.log((iterator*2));
// }

// // a=[1,2,3,4,5]
// // a.forEach(element => {
// //     console.log(typeof(element *2) )
// // });



let arr=[2,3,5,'hi',function() {console.log('array');
    
},4]
console.log(arr[4]());

 arr.forEach((ele)=>console.log(ele*2))
//console.log(array);
for (const iterator of arr) {
    console.log(iterator);
}