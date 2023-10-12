


let peronalDetails ={

    name : 'Santoshkumar Patil',
    address : 'Kolhapur',
    mob: 985265828,
    education : 'MCA',
    };
    console.log(`This is personal information == >`, peronalDetails);
    console.log(`-------------------------------------------------------------`);
    let collgeDetails = {
        name :"Shri Balwantrao Yadav College",
        address : 'Peth Vadgaon',
        faculties : 'Arts, Commerce, Science',
        principal : 'Koli Sir',
    };

    console.log(`These are the college details ==>`, collgeDetails);

    let mergeOb=Object.assign(peronalDetails, collgeDetails);
    console.log(`-------------------------------------------------------`);

    console.log(`After merging two object`, mergeOb);

    let arrayOfFriend = ['prashant', 'Abhishek','Bajirao', 'Sudesh','Kunal'];

    Object.freeze(arrayOfFriend);
    console.log(`After freezing array`, arrayOfFriend);
   // let addName=arrayOfFriend.push('pravin');

    //console.log(addName);
    let givenString = 'Codemind Technology';

        let reverse = ' ';
    for (let index = givenString.length-1; index >=0 ; index--) {

            let char = givenString.charAt(index);
          //  const element =givenString(index);
            if (char==' ')
            {
                break;
            }

            reverse =reverse + char;
            
            
        }
    console.log(`Original string is ==> ${givenString} ==>After reverse string is ==> ${reverse}`);
    