


function maleMarriageEligibility(gender, age, boyName){

 var leigible=gender=='Male' && age>=21 ? `Hey ${boyName} You are eligible for Marriage!`
: `sorry, ${boyName} you are not eligible try next time`;

return leigible;


}
var result = maleMarriageEligibility('Male', 25, 'Billgates');
console.log(result);