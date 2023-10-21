

const arrayNumber = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Original array is ==>${arrayNumber}`);
const arrayTranform = arrayNumber.map((currentvalue)=>{

    const add10Value = currentvalue + 10 ;
      return add10Value;

});
console.log(`After adding "10" value in each element ==> ${arrayTranform}`);
const arrayNum = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
const arrayTran = arrayNum.map((currentvalue)=>{

    const cube = currentvalue * currentvalue * currentvalue ;
      return cube;

});
console.log(arrayTran);

console.log(`After calculating cube of each element is ==> ${arrayTranform}`);
const arrayNu = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
const arrayTr = arrayNu.map((currentvalue, index)=>{

    const addIndexValue = currentvalue + index;
      return addIndexValue;

});
console.log(`After adding index value of array ==> ${arrayTr}`);