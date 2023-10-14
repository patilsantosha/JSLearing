



const empinfo =`{

    "name": "Aleix Melon",
    "id" : "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, Laham St.",
        "city" :"Innsbruk",
        "country" : "Austriya"
    },
    "referred-by" : "E0012"
}`
console.log(`------------------------Json string inside backtick-----------------`);
console.log(`--------------------------Json string converted in object--------------------`);
const melon = JSON.parse(empinfo);
console.table(melon);
console.log(`Now type of strong is ==>`, typeof melon);
console.log(`Employee role is ==> ${melon.role[0]}`);
const lastWord=melon.name.split(" ");
console.log(`Last name of employee is ==> ${lastWord[1]}`);

console.log(`Joining year of employee is ==> ${melon.doj}`);