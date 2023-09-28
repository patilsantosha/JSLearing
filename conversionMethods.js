

console.log(`==================numeric string used with -, *, +, / result number type`);
var result;

console.log(`Implicit string to number conversion '4' - '2' `);
result='4' - '2';
console.log(`Answer is ==> ${result}`);

console.log(`================================================`);
console.log(`Implicit string to number conversion '4' - 2 `);
result='4' - 2;
console.log(`Answer is ==> ${result}`);

console.log(`================================================`);
console.log(`Implicit string to number conversion '4' - 2 `);
result='4' * 2;
console.log(`Answer is ==> ${result}`);

console.log(`================================================`);
console.log(`Implicit string to number conversion '4' - 2 `);
result='4' / 2;
console.log(`Answer is ==> ${result}`);

console.log(`================================================`);
console.log(`string to number`);
result=Number('324');
console.log(`Answer is ==> ${result}`);
console.log(`Data type==>`, typeof result);

console.log(`================================================`);
console.log(`string to boolean`);

result=Boolean('324');
console.log(`string is '324'`);
console.log(`After conversion ==> ${result}`);
console.log(`After -1 ==> ${result-1}`);
console.log(`================================================`);
console.log(`Number to string`);

result=String(324);
console.log(`Number is 324`);
console.log(`After conversion ==> ${result}`);
console.log(`Data type of after conversion ==> `, typeof result);
console.log(`================================================`);
var n1 = "20";
var n2 = 20;
console.log(`n1 and n2 comparison "${n1}"==${n2}  Boolean vlaue ==>`,n1==n2); 

console.log(`Before conversion`,n1, typeof n1);
n1=+n1;
console.log(`After conversion`, n1, typeof n1);
