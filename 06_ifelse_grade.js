

console.log(`========================Eligible for vote or not============================`);

var voteEligible= function(n1){
   strconversion=+n1;

    if (n1==0 || n1<=0 || n1==null || n1>=130 || isNaN(strconversion)){

        console.log(`Invalid Data ==> ${n1}`);   
    }
    else
       if (n1>=18) {

        console.log(`You are eligible for vote ==> ${n1}`);

       }
        else
        {
            console.log(`You are not eligible for vote ==> ${n1}`);
        }     
}


voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
voteEligible("BillGates");
