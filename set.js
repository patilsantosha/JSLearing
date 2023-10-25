



const arrayNumber = [2, 10, 13, 20, 15, 2, 10, 13];
const arrayofUniqueVal = [... new Set(arrayNumber)];

console.log(`Unique values are ==>${arrayofUniqueVal}`);

const newset = new Set();

newset.add(66);
newset.add(70);
newset.add(80);
newset.add(90);
newset.add(80);
console.log(newset);
newset.delete(80);
console.log(newset);
console.log(newset.has(90));    

for (const element of newset) {
    console.log(element);
}

const newMap = new Map();

newMap.set(44,"Anil");
newMap.set(66,"Santosh");
newMap.set(55,"Pranav");
newMap.set(60,"Pravin");
newMap.set(70,"Pravin");
console.log(newMap);

console.log(newMap.has(66));
newMap.delete(60);
console.log(newMap);
console.log(newMap.size);

const allkeys = newMap.keys();
for (const element of allkeys) {
    console.log(newMap.get(element));
}

class Bank {

   constructor(bank_name, location, ac_no, ifsc, interest_rate){
this.bank_name = bank_name;
this.location = location;
this.ac_no = ac_no;
this.ifsc = ifsc;
this.interest_rate = interest_rate;

   }

}

const axis_bank = new Bank("Axis Bank", "Pune", 658422587, "AXB", 7.5);
const sbi_bank = new Bank("SBI Bank", "Kolhapur", 6958554, "SBI", 8.5);
const icici_bank = new Bank("ICICI Bank", "Nashik", 6955557, "ICICI", 9.5);
const kotak_bank = new Bank(" Kotak Bank", "Latur", 989557898, "KOTAK", 6.5);

//const allObject = [axis_bank, sbi_bank, icici_bank, kotak_bank];

 const uniqueSet = new Set();
 uniqueSet.add(axis_bank);
 uniqueSet.add(sbi_bank);
 uniqueSet.add(icici_bank);
 uniqueSet.add(kotak_bank);

for (const element of uniqueSet) {
    
    console.log(`Bank Names are ==> ${element.bank_name} & Location are ==> ${element.location}`);
}


// for (const element of uniqueSet) {

//     console.log(`Bank Names are ==> ${element.bank_name} & Location are ==> ${element.location}`);
    
// }

const createMap = new Map();

createMap.set(axis_bank.ac_no, axis_bank);
createMap.set(sbi_bank.ac_no, sbi_bank);
createMap.set(icici_bank.ac_no, icici_bank);
createMap.set(kotak_bank.ac_no, kotak_bank);

const allkey= createMap.keys();
for (const element of allkey) {
    console.log(createMap.get(element));
   // console.log(createMap.get(element.ac_no));
    //, createMap.get(element.interest_rate));
}

    














