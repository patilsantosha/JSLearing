console.log(
  `===========program of to find even position value========`
);
let arrayNumbers = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    const element = arrayNumbers[index];
    console.log(element);
  }
}

console.log(`===============Addition of array element================`);

let arrayN = [22, 11, 44, 55, 77, 33];
let sum = 0;
for (let index = 0; index < arrayN.length; index++) {
  const element = arrayN[index];
  sum = sum + element;
}

console.log(`Sum of array element [22, 11, 44, 55, 77, 33] : ${sum}`);
console.log(`========================================================`);

console.log(`===========program of to find even position & addition of even value========`);

let arrayNum = [22, 11, 44, 55, 77, 33];
let sums=0;
for (let index = 0; index < arrayNum.length; index++) {
  if (index % 2 == 0) {
    const element = arrayNum[index];
    console.log(element);
    sums= sums+ element;
  }
  
}
console.log(sums);