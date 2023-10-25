


const array = [2, 5, 3, 2, 7, 11];
const sum = array.reduce((runningTotal, value)=>{
    return runningTotal + value;
    
}, 0 );
console.log(`addition of array using reduce method ==> ${sum}`);

const nestedArray = [[2,5], [4, 5, 6], [2, 7, 11] ];

const arrayNum = nestedArray.flatMap((element=> element));

 const add = nestedArray.reduce((runningTotal, value)=>{

     return runningTotal + value;
})
console.log(add);