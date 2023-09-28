
console.log(`========================= Assignment - 01 use of Ternary & logical operators======================`);
console.log(`============================Step- 01=====================================`);

function maleMarriageEligibility(gender, age, boyName){

    console.log(`Your age is == >${age}`);
var result=gender=='Male' && age>=21 ? `Hey ${boyName} you are eligible for marriage` : `Sorry ${boyName} you are not eligible for marriage`;

return result;

}
var result=maleMarriageEligibility('Male', 29, 'Bill Gates');
console.log(result);

console.log(`=================================================================`);
function maleMarriageEligibility(gender, age, boyName){

    console.log(`Your age is == >${age}`);
    var result=gender=='Male' && age>=21 ? `Hey ${boyName} you are eligible for marriage` : `Sorry ${boyName} you are not eligible for marriage`;

return result;

}
var result=maleMarriageEligibility('Male', 17, 'Stew Jobs');
console.log(result);

console.log(`============================Step- 02=====================================`);

function femaleMarriageEligibility(gender, age, girlName){

    console.log(`Your age is == >${age}`);
var result=gender=='Female' && age>=18 ? `Hey ${girlName} you are eligible for marriage` : `Sorry ${girlName} you are not eligible for marriage`;

return result;

}
var result=femaleMarriageEligibility('Female', 16, 'Jenifer');
console.log(result);

console.log(`=================================================================`);
function femaleMarriageEligibility(gender, age, girlName){

    console.log(`Your age is == >${age}`);
    var result=gender=='Female' && age>=21 ? `Hey ${girlName} you are eligible for marriage` : `Sorry ${girlName} you are not eligible for marriage`;

return result;

}
var result=femaleMarriageEligibility('Female', 27, 'Malinda Gates');
console.log(result);









