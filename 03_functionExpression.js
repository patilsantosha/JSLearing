
console.log(`==========function expression================`);
// var show = function(){
//     console.log(`Inside Function Expression...`);
// }
// show();

// var add = function(value1, value2){
//     console.log(value1+value2);
//}
//add(20, 10);
console.log(`=================step-1 ================`);
var square = function(value){
    return value * value;
}
var result = square(5);
console.log(`Square of 5 is == >${result}`);

var square = function(value){
    return value * value;
}
var result = square(6);
console.log(`Square of 6 is == >${result}`);

var square = function(value){
    return value * value;
}
var result = square(25);
console.log(`Square of 25 is == >${result}`);

var square = function(value){
    return value * value;
}
var result = square(100);
console.log(`Square of 100 is == >${result}`);

var square = function(value){
    return value * value;
}
var result = square(67);
console.log(`Square of 67 is == >${result}`);

var square = function(value){
    return value * value;
}
var result = square(89);
console.log(`Square of 89 is == >${result}`);

var square = function(value){
    return value * value;
}
var result = square(59);
console.log(`Square of 59 is == >${result}`);

console.log(`=================step-2 ================`);

console.log(`Type of function is ==>`, typeof square);

console.log(`=================step-3 ================`);
var areaOfRect=function(value1, value2){

   var ans=value1*value2;
    return ans;
}
 var result=areaOfRect(499, 917);
    console.log(`Area of rectangle is ==> ${result}`);

console.log(`=================step-4 ================`);
var swapValues=function(value1, value2){

    console.log(`Before swap value1 => ${value1} Value2 => ${value2} `);
    var str1=value1;
     value1=value2;
     value2=str1;
     console.log(`After swap value1 => ${value1} Value2 => ${value2} `);
}
 swapValues("Mahi", "Raina");
 swapValues(55,77);

 console.log(`=================step-5 ================`);
var storestring=function(){
        var str='Js the most popular language of internet';
        console.log(`I. Total characters are ==> ${str.length}`);
        console.log(`II. On Index 6 character is ==> "${str.charAt(6)}"`);
        console.log(`III On Index 11 character is ==> "${str.charAt(11)}"`);
        var lastchar=str.length-1;
        console.log(`IV. Last character of string is ==> "${str.charAt(lastchar)}"`);
        console.log(`V. First character of string is ==> "${str.charAt(0)}"`);
        var lastchar=str.length-3;
        console.log(`VI. Last character of string is ==> "${str.charAt(lastchar)}"`);

        var words=str.split(" ");
        var count=words.length;
        console.log(`VII. Total number of words are ==> ${count}`);
        var count=words.length*words.length;
        console.log(`VIII. Total number of words are ==> ${count}`);


}
storestring();




