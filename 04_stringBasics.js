

var greet="Good Morning";
console.log("==================Length property======================");
var totalLength=greet.length;
console.log("Length of string is:", totalLength);
console.log("========================CharAt=========================");
var charAt=greet.charAt(0);
console.log("Character at index 0 is:", charAt);

console.log("========== concatenation =============== ");
var firstName = "Jenny";
var lastName = " Gates"
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");
var indexOfM = greet.indexOf('M');
console.log('Index of M is: ', indexOfM);

 console.log(greet.indexOf('nin'));

 console.log('Index of char z:',greet.indexOf('z'));

 console.log('Index of char D:',greet.indexOf('D'));

 console.log('Index of char o is:', greet.indexOf('o'));

 console.log("========== replace =============== ");
var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);

console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);

console.log("========== includes() =============== ");
var result = greet.includes('Morning');
console.log("Is Morning word available: ", result);
var result = greet.includes('nin');
console.log("Is nin word available: ", result);
var result = greet.includes('good');
console.log("Is good word available: ", result);

console.log("========== search()  to find sub string=============== ");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('after');
console.log(result);

console.log("========== slice() to get particular part of string s=============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);
console.log(result);

console.log("========== split() multiple uses=============== ");
var result = greet.split(" ");
console.log(result);

//WAP to count the total number words
var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log('Total words is: ', words.length);
console.log(`Total words is: ${words.length}`);
// console.log(typeof words);

// String template
console.log(`I am "UI" Developer `);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Addition of ", num1, "and ", num2, "is :", result);
console.log(` Addition of ${num1} and ${num2}  is: ${result}`);

//str.startsWith('hey');
//str.endsWith('up');