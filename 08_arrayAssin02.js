console.log(`==============================================`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Total length of array is ==> ${arrayNumbers.length}`);
console.log(`==============================================`);

let firstElement = arrayNumbers[0];
console.log(`First element array is ==> ${firstElement}`);
console.log(`==============================================`);

//let lastElement=arrayNumbers[];
console.log(`Last element array of ==> ${arrayNumbers[10]}`);
console.log(`==============================================`);

let thirdLastproperty = arrayNumbers.length;
console.log(`Third last property of array is ==> ${thirdLastproperty}`);
console.log(`==============================================`);

for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    const element = arrayNumbers[index];

    console.log(`Even numbers from array are==>${element}`);
  }
}
console.log(`==============================================`);
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 !== 0) {
    const element = arrayNumbers[index];

    console.log(`Even numbers from array are==>${element}`);
  }
}

console.log(`==============================================`);
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    sum = sum + arrayNumbers[index];
  }
}
console.log(`Addition of Even numbers from array are==>${sum}`);

console.log(`==============================================`);
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 !== 0) {
    sum = sum + arrayNumbers[index];
  }
}
console.log(`Addition of odd numbers from array are==>${sum}`);

console.log(`==============================================`);
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  sum = sum + arrayNumbers[index];
}

console.log(`Addition of all element from array are==>${sum}`);
console.log(`==============================================`);

var num = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 5 == 0) {
    //sum = sum + arrayNumbers[index];
    const element = arrayNumbers[index];
    console.log(`Number of multiple of five ==>${element}`);
  }
}

console.log(`==============================================`);

var isAvailable=arrayNumbers.includes(115);
console.log(`element is not available ==> ${isAvailable}`);
console.log(`==============================================`);

var isAvailable=arrayNumbers.includes(23);
console.log(`element is available ==> ${isAvailable}`);
console.log(`==============================================`);

arrayNumbers.splice(3,0,55,56);

console.log(`element inserted before 3 index ==> ${arrayNumbers}`);

console.log(`==============================================`);

arrayNumbers.splice(4,3);

console.log(`element deleted from index 4 ==> ${arrayNumbers}`);

