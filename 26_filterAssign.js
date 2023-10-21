const arrayNumber = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const greaterNo = arrayNumber.filter((currentValue) => {
  return currentValue > 50;
});

console.log(`In given array greater number are ==> ${greaterNo}`);

const evenNo = arrayNumber.filter((currentValue) => {
    return currentValue %2==0;
  });
  
  console.log(`In given array even no are follows ==> ${evenNo}`);
  
  const oddNo = arrayNumber.filter((currentValue) => {
    return currentValue %2 !==0;
  });
  
  console.log(`In given array odd no are follows ==> ${oddNo}`);

  const multipleOF5 = arrayNumber.filter((currentValue) => {
    return currentValue %5==0;
  });
  
  console.log(`In given array multiple of 5 no are ==> ${multipleOF5}`);


  const between20and50 = arrayNumber.filter((currentValue) => {
    return currentValue >20 && currentValue <50;
  });
  
  console.log(`In given array numbers between 20 to 50 are ==> ${between20and50}`);
