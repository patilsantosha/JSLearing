

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