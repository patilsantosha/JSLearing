



//const array = [2, 5, 3, 2, 7, 11];

const frdNames = ['Jenny', "Bill", 'Stew', "Elon"];

const sortedArray = frdNames.sort();
console.log(sortedArray);

const reverseArray = sortedArray.reverse();

console.log(reverseArray);

console.log(`============ascending sorting an array of number================`);
const array = [29, 15, 31, 111, 27, 6];

const newArray = array.sort((a, b)=>{
return a>b ? 1 : -1;
});
console.log(newArray);
console.log(newArray[newArray.length-1]);


console.log(`============descending sorting an array of number================`);
const arr = [29, 15, 31, 111, 27, 6];

const newArr = array.sort((a, b)=>{
return a>b ? -1 : 1;
});
console.log(newArr);
console.log(newArr[newArr.length-1]);
