


let array = [10, 20, 30, 40, 50, 60];
console.log(typeof array);

console.log(array);

console.log(`Total elements in array are= ${array.length}`);

console.log(`======================accessing or updating array element============================`);
let element0thIndex = array[0];
console.log(element0thIndex);

console.log(array[array.length-1]);

console.log(`Second last element in array is : ${array[array.length-2]}`);

console.log(`==================updating an element================`);

array [1]=70;
console.log(array);

console.log(`===================indexOf()===================`);
console.log(array.indexOf(30));

console.log(`===================Traversing array ( means vising each and every element)===================`);
let arrayNum = [20, 30, 60, 40, 80, 10];
 for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
 }

 console.log(`===================Traversing array in reverse order===================`);
for (let index = arrayNum.length-1; index >= 0; index--) {
    const element = arrayNum[index];
    console.log(element);
}

console.log(`===================adding element in the last============`);
arrayNum.push(88);
console.log(arrayNum);

 console.log(`===================removing element in the last============`);

 arrayNum.pop(88);
 console.log(arrayNum);
 console.log(`===================adding element in the first position============`);
    arrayNum.unshift(99);
    console.log(arrayNum);
 console.log(`===================removing element in the first position============`);
arrayNum.shift();
console.log(arrayNum);




















