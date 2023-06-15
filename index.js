
 const readlineSync = require('readline-sync');
 const number = +(readlineSync.question("Please Enter Your Any Number:"));
if(number % 2 === 0){
    console.log(`${number} is even number`)
}else{
    console.log(`${number} is odd number`)
}
