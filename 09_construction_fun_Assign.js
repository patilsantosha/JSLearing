




function Bank(bankName, location, ifscCode, brachCode){

 this.bankName = bankName;
 this.location = location;
 this.ifscCode = ifscCode;
 this.brachCode = brachCode;


}

let yesBank = new Bank('Yes Bank', 'Pune', 'YES5847','YES7777');
console.log(`Bank Name =>${yesBank.bankName} Location => ${yesBank.location} ifscCode => ${yesBank.ifscCode} branchCode => ${yesBank.brachCode}`);
console.log(`--------------------------------------------------------------------------------------------------`);
let sbiBank = new Bank('SBI', 'Kolhapur', 'SBI00587','SBI88698');
console.log(`Bank Name =>${sbiBank.bankName} Location => ${sbiBank.location} ifscCode => ${sbiBank.ifscCode} branchCode => ${sbiBank.brachCode}`);
console.log(`--------------------------------------------------------------------------------------------------`);
let mahBank = new Bank('Maharashtra Bank', 'Mumbai', 'MSTB0002255','MSTB00004447');
console.log(`Bank Name =>${mahBank.bankName} Location => ${mahBank.location} ifscCode => ${mahBank.ifscCode} branchCode => ${mahBank.brachCode}`);
console.log(`--------------------------------------------------------------------------------------------------`);
let axisBank = new Bank('Axis Bank', 'Chennai', 'AXI352658','AXIS365888');
console.log(`Bank Name =>${axisBank.bankName} Location => ${axisBank.location} ifscCode => ${axisBank.ifscCode} branchCode => ${axisBank.brachCode}`);
console.log(`--------------------------------------------------------------------------------------------------`);

Bank.prototype.openTime="9 AM IST";
console.log(`Opening Timing of YES Bank is ==> ${yesBank.openTime}`);

Bank.prototype.closeTime="6 PM IST";
console.log(`Closing Timing of YES Bank is ==> ${yesBank.closeTime}`);
console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`Opening Timing of SBI Bank is ==> ${sbiBank.openTime}`);
console.log(`Closing Timing of SBI Bank is ==> ${sbiBank.closeTime}`);
console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`Bank Name is ==> ${yesBank.bankName} Branch Code is==> ${yesBank.brachCode} Bank opening time is ==> ${yesBank.openTime}`);