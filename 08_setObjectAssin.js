


class Bank {

    constructor(bank_name, location, account_no, ifSC, interest_rate){
        this.bank_name= bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifSC=ifSC;
        this.interest_rate=interest_rate;
    }

}
const axis_bank= new Bank ('Axis Bank', 'Pune', 524526625, 'AX58668', 8);
const sbi_bank= new Bank ('State Bank', 'Kolhapur', 4526625, 'SBI58636', 7);
const icici_bank= new Bank ('ICICI Bank', 'Mumabi', 89498755, 'ICI58668', 8);
const kotak_bank= new Bank ('Kotak Bank', 'Gujrat', 9874458, 'KOT58668', 7.5);
const hdfc_bank= new Bank ('HDFC Bank', 'Solapur', 89755865, 'HDFC58668', 7);
const panjab_bank= new Bank ('Panjab Bank', 'new Mumbai', 98565585, 'PJB58668', 8);

const allObject= new Set(axis_bank);

for (const key of allObject) {

    console.log(key);
    
}