console.log("==========================Step-1  ======================");
console.log("=====================(First Function) Function with no arguments===========");
function libraryDetails(){
console.log("---------Book Details-----------");
console.log('Book Name: Information Technology');
console.log('Author Name: Board Publication');
}
//console.log("==========================Step-1 Function with no arguments ======================");
//console.log("==========================Second Function======================");
function empDetails(){
    console.log("Number of Employees working in TCS:=>50000");
    console.log("As software Developer:=>2000");
    console.log("As software Tester:=>3000");
}

libraryDetails();

console.log("===========================(Second function) Function with no arguments==================");
empDetails();
console.log("===========================Step-2====================================");
console.log("  Function with arguments======================");
function personalDetails(firstName, lastName, collegeName){
console.log("First Name:=>",firstName);
console.log("First Name:=>",lastName);
console.log("First Name:=>",collegeName);
}

personalDetails(" Santoshkumar"," Patil"," Shri Balwantrao Yadav jr college")
console.log("===========================Step-3====================================");
console.log("==========================Function with arguments======================");
function swapValues(valueOne, valueTwo) {
    console.log("==============================Before swap values=============");
    console.log("before swap:", valueOne, valueTwo);
    var temp=valueOne;
        valueOne=valueTwo;
        valueTwo=temp;
        console.log("==========================After swap value=============");
        console.log("After swap:", valueOne, valueTwo);
}

swapValues("Virat","Anushka");
swapValues(1000, 2000);
console.log("===========================Step-4====================================");
console.log("==========================Function with arguments====================");
console.log("==========================Addition================");
function addThreeValues(valueOne, valueTwo, valueThree){
console.log("Values are=:",valueOne, valueTwo, valueThree);
var sum;
sum=valueOne+valueTwo+valueThree;
return sum;

}
var addOfThreeValues=addThreeValues(10.23, 600, 40);
console.log("Addition is:=>", addOfThreeValues);
var addOfThreeValues=addThreeValues("Hello","Good","Morning");
console.log("=========================String concatenation================");
console.log("concatenated string is:=>", addOfThreeValues);

