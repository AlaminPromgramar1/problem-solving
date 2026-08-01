// 1. The object that stores the data
const checkDetails = {
    totalBill: 100,
    numberOfPeople: 4, // This will trigger your validation!
    tipPercentage: 15
};

function calculateBillSplit(billData){

    if(typeof billData !== 'object' || Array.isArray(billData)){
        return "Invalid input ";
    }
    if(billData.numberOfPeople <= 0 ){
        return "Error: Number of people must be greater than zero.";
    }

    const totalBill = billData.totalBill;
    const numPeople = billData.numberOfPeople;
    const precentage = billData.tipPercentage;
    
    const tipAmount = totalBill *  precentage / 100;
    // console.log(tipAmount);
    const totalAmount = totalBill + tipAmount;
    const amountPerPerson = totalAmount/ numPeople;
    // console.log(amountPerPerson);
    const singlPerson = Number(amountPerPerson.toFixed(1));
    return singlPerson;
    
    



}


const billSplit = calculateBillSplit(checkDetails);
console.log(billSplit);
