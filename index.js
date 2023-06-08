// const firstString = "upendra";
// const secondString = "Abhishek";
// const thirdString = "Amit";

// if(firstString.length < secondString.length && firstString.length < thirdString.length){
//     console.log(`${firstString} is smallest string`);
// }else if(secondString.length < firstString.length && secondString.length < thirdString.length){
//     console.log(`${secondString} is smallest string`);
// }
// else{
//     console.log(`${thirdString} is smallest`)
// }

 const readlineSync = require('readline-sync');
 const number = +(readlineSync.question("Please Enter Your Any Number:"));
if(number % 2 === 0){
    console.log(`${number} is even number`)
}else{
    console.log(`${number} is odd number`)
}