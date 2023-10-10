

class Vehicle{
    name
    color
    model
    speed

    constructor(name, color, model, speed){
        this.name=name;
        this.color=color;
        this.model=model;
        this.speed=speed;
    }
    
};
const hyundai = new Vehicle('hyundai', 'White', 'hyundai SX', '180');
    console.log(hyundai);

const  maruti= new Vehicle('maruti', 'red', 'swift', '200');
console.log(maruti);

const tata = new Vehicle('tata', 'blue', 'Safari', '160');
console.log(tata);

const ford = new Vehicle('ford', 'red', 'SUV new', '150');
console.log(ford);

const jagwar = new Vehicle('jagwar', 'White', 'new model', '180');
console.log(jagwar);



class College{
    name
    address
    faculties
    studentStrength
    constructor(name, address, faculties, studentStrength){
        this.name= name;
        this.address= address;
        this.faculties= faculties;
        this.studentStrength= studentStrength;


    }
display(){
console.log(`Details : ${this.name}, ${this.address}, ${this.faculties}, ${this.studentStrength}`);

}

}
const bycollege = new College('Shri Balwantrao yadav college', 'peth vadgaon', 'Arts, commerce, science', ' 1500');
console.log(`---------------------------------------------------------------------------------------`);
console.log(bycollege); 

const  vycollege= new College('Shri Vijaysinha yadav college', 'peth vadgaon', 'Arts, commerce, science', ' 1000');
console.log(`---------------------------------------------------------------------------------------`);
console.log(vycollege); 

const ambedkarCollege = new College('Dr Babasaheb Ambedkar college', 'peth vadgaon', 'Arts, commerce', ' 700');
console.log(`---------------------------------------------------------------------------------------`);
console.log(ambedkarCollege); 

const vadgaonJrCollge = new College('Vadgaon Jr college', 'peth vadgaon', 'Arts, commerce, science', ' 600');
console.log(`---------------------------------------------------------------------------------------`);
console.log(vadgaonJrCollge); 

console.log(`---------------------------------------------------------------------------------------`);
const arrayCollge = [bycollege, vycollege, ambedkarCollege, vadgaonJrCollge];

function traverseObject(values) {

    for (const key in arrayCollge) {
        
  let element= arrayCollge[key];
  element.display();
    }
    
}
let values= traverseObject(bycollege);
 console.log(values);
console.log(`--------------------------------------------------------------------`);
//  let val= traverseObject(vycollege);
//  console.log(val);

