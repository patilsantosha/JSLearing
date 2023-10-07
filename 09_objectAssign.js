

console.log(`==========================Assignment 01==============================`);
console.log(`Attributes of professor object are ==>`);

let professor = {
    name : 'Prof. Ashok Chavan',
    collegeName : 'Shri Balwantrao Yadav jr college',
    degignation : 'HOD',
    subject: 'PoliticalScience',
    age : 50,
    degrees : {
        engineering : 'CSC',
        PHD : 'Adv computing',
        arts: 'political science',
    },
    Certificate : ['Hacker Rank Participation','Certificate in IFE course', 'Certificate in Adv programming'],
    totalExperience: '14 years of experience',
};
console.log(professor);
console.log(`=======================================`);
console.log(`After adding total experience property ==>`,professor.totalExperience);
console.log(`=======================================`);
console.log(`=====After adding certificate property===`);

for (const key in professor.Certificate) {
           
        const element = professor.Certificate[key];

        console.log(element);
        
    }
professor.Certificate.splice(1,1,'Certificate of C-DAC')
console.log(`------------------After modifying existing property--------------`);
console.log(professor.Certificate);
console.log(`------------------Adding new certificate at the end of array-----------------`);
professor.Certificate.push('Oracle Certified');
console.log(professor.Certificate);
console.log(`------------------Last element of array certificate-----------------`);
//const latElement=professor.Certificate.length-1;
console.log(professor.Certificate[3]);
console.log(`------------------All objects-----------------`);
for (const key in professor) {
    
        const element = professor[key];
        console.log(element);        
    }
console.log(`------------------Traversing array using for of loop-----------------`);

for (const iterator of professor.Certificate) {
    console.log(iterator);
}


