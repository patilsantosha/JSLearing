

let arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`====== slice() =========`);
const arraySliced = arrayNumber.slice(3);
console.log(arraySliced);

const arrayElements = arrayNumber.slice(1, 4);
console.log(arrayElements);

console.log(`====== splice() =========`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
const splicedElements = arrayNumber.splice(4);
console.log(arrayNumber);
console.log(splicedElements);

console.log(`====== splice() to remove elements with index and delete count =========`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
var removedElements = arrayNumber.splice(2, 2);
console.log(arrayNumber);
console.log(removedElements);