

console.log(`==================================================`);
var count=0;
function countCharA(str){
      console.log(`First string is ==> ${str}`)
    for (let index = 0; index < str.length; index++) {
        var char=str.charAt(index);  
        
        if (char=='a' || char=='A') {
            count=count+1;
        }
    }
   console.log(`Count the total 'A' and 'a' are ==> ${count}`);
    
}

//countCharA('I AM Learning JavaScript, The Language of Internet');
//console.log(`====================================================`);

countCharA('My favorite movie is LAggAn');
