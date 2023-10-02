console.log("====================Assignment 02===================");
var strmsg = "   Hey you are doing good, keep it up    ";

function stringHandsOn() {
  console.log("Given string is:==>", strmsg);
  console.log("Length of string==>", strmsg.length);
  console.log("=================================================");

  var strtrim = strmsg.trim();
  console.log("String after trim==>", strtrim);

  console.log("Length of string after trim==>", strtrim.length);
  var result = strmsg.length - strtrim.length;
  console.log("Total Number of spaces removed ==>", result);
  console.log("=================================================");
  console.log(
    "First character after trim:==>",
    strtrim.charAt(0),
    "Last character after trim:==>",
    strtrim.charAt(33)
  );
  console.log("=================================================");
  var result = strtrim.split();
  console.log("string after split ==>", result);

  var words = strtrim.split(" ");
  console.log("Total word available in string==>", words.length);
  console.log("=================================================");
  console.log(`Index of "good is ==>"`, strtrim.indexOf("g"));
  console.log(
    `substring starting from Index "22" is ==>`,
    strtrim.substring(22)
  );
  console.log("=================================================");
  console.log(`String ends with "up"==>`, strtrim.endsWith("up"));
  console.log("=================================================");
  console.log(`String start with 'Hey' ==>`, strtrim.startsWith("Hey"));
}
stringHandsOn();
var str = "santoshkumar";
console.log(`words is ==>${str}`);
var result = str.trim();
console.log(`total mo of characters are ==> ${str.length}`);
console.log(`index of k is==>`, str.indexOf("k"));
//var words=str.split(" ");
console.log(`separation of words ==> ${result.substring(7)}`);
