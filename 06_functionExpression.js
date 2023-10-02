

console.log(`======================= Assignment on Leap year ===========================`);
var leapYear=function (year) {

    var str=+year;
if (year==0 || year==null || isNaN(str)) {

    console.log(`Invalid Year ==> ${year}`);
    
}
else 
 if (year%4==0) {

   // var year=year%4;
    console.log(`Leap year ==> ${year}`);
 } else {
    
    console.log(`Not leap year ==> ${year}`);
 }
}

leapYear(2020);
leapYear(1999);
 leapYear(1600);
leapYear(2022);
 leapYear(1945);
leapYear(null);
 leapYear(undefined);
 leapYear("Twenty Twenty");
 leapYear(NaN);
 leapYear(1750);