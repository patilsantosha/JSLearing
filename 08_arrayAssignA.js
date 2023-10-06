
console.log(`=======================================`);
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

let firstElement=arrayFruits[0];
console.log(`First element of array is ==> ${firstElement}`);
console.log(`=======================================`);

let lastElement=arrayFruits[4];
console.log(`Last element of array is ==> ${lastElement}`);
console.log(`=======================================`);

arrayFruits.unshift('Papaya');
console.log(`Element added before first element ==> ${arrayFruits}`);
console.log(`=======================================`);

arrayFruits.splice(4, 1);
console.log(`Removed mango element from array ==> ${arrayFruits}`);
console.log(`=======================================`);

arrayFruits.push('Pineapple');
console.log(`Element added at the last position of array ==> ${arrayFruits}`);
console.log(`=======================================`);

arrayFruits.splice(4, 0, 'Dragon Fruit');
console.log(`added element before water melon ==> ${arrayFruits}`);
console.log(`=======================================`);

arrayFruits.splice(2, 1, 'Kiwi');
console.log(`Removing Orange element and inserted Kiwi element ==> ${arrayFruits}`);
console.log(`=======================================`);

for (let index = 1; index < arrayFruits.length-2; index++) {
    const element = arrayFruits[index];

    console.log(`Array of index 1 to 4 ==> ${element}`);
    
}
console.log(`=======================================`);


for (let index = 4; index < arrayFruits.length; index++) {
    const element = arrayFruits[index];

    console.log(`Only last three element==> ${element}`);
}
