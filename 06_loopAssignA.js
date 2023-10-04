//Addition of 
console.log(`==================================`);
var str = "Im very good IT Developer";

var count = 0;
for (let index = 0; index < str.length-1; index++) {
  
    var char=str.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' ||char=='u' ||char=='A' || char=='E' || char=='I' || char=='O' || char=='U'|| char==' ') {

        count=count + 1;
        
    }
}
console.log(`Total number of vowels are ==> ${count}`);
console.log(`==================================`);
function sumOfCube(){
    sum=0;
    for (let index = 0; index <=5; index++) {
        
        sum=sum+index*index*index;
        
    }
    console.log(`sum of first 5 numbers is ==>${sum}`);
}
sumOfCube();

   
console.log(`==================================`);
//var str1=`Hard work always pay back`;
//var str2=`Soon I will be UI IT Champ`;

function odPositionedChars(str) {
    var result=0;
for (let index = 1; index < str.length-1; index++) {
    
        if (str%2!==0)
        {
             result=result + str.charAt(index);
        }
        
}
    console.log(result);
}
//odPositionedChars(`Hard work always pay back`);
//odPositionedChars(`Soon I will be UI IT Champ`);