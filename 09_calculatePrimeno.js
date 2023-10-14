

const arrayNumber = [11, 3, 6, 10, 43, 29, 50];
function isPrimeNo(num) {
   
for (let index = 2 ; index <=arrayNumber.length-1 ;  index++) {
     if (num%index==0 ){
        
        return false;
     }
    return true;
    
}
}
console.log(`Given array is ==> [11, 3, 6, 10, 43, 29, 50]`);
console.log(`-------------------------------------------------`);
let checkNo=isPrimeNo(arrayNumber[0]);
console.log(`Given number is prime "11"`);
console.log(`Is prime Number ==> ${checkNo}`);

console.log(`-------------------------------------------------`);
let checkN=isPrimeNo(arrayNumber[1]);
console.log(`Given number is prime "3"`);
console.log(`Is prime Number ==> ${checkN}`);

console.log(`-------------------------------------------------`);
let checkNumber=isPrimeNo(arrayNumber[2]);
console.log(`Given number is prime "6"`);
console.log(`Is prime Number ==> ${checkNumber}`);

console.log(`-------------------------------------------------`);
let check=isPrimeNo(arrayNumber[3]);
console.log(`Given number is prime "10"`);
console.log(`Is prime Number ==> ${check}`);

console.log(`-------------------------------------------------`);
let checkNum=isPrimeNo(arrayNumber[4]);
console.log(`Given number is prime "43"`);
console.log(`Is prime Number ==> ${checkNum}`);

console.log(`-------------------------------------------------`);
let checkno=isPrimeNo(arrayNumber[5]);
console.log(`Given number is prime "29"`);
console.log(`Is prime Number ==> ${checkNo}`);

console.log(`-------------------------------------------------`);
let checkPriNo=isPrimeNo(arrayNumber[6]);
console.log(`Given number is prime "50"`);
console.log(`Is prime Number ==> ${checkPriNo}`);

