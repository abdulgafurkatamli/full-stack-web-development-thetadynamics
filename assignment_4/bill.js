let units = 350; 
let billAmount = 0;
if (units <= 100) {
    billAmount = units * 2;
} 
else if (units <= 200) {
    billAmount = (100 * 2) + (units - 100) * 3;
} 
else if (units <= 300) {
    billAmount = (100 * 2) + (100 * 3) + (units - 200) * 5;
} 
else {
    billAmount = (100 * 2) + (100 * 3) + (100 * 5) + (units - 300) * 7;
}

billAmount = billAmount + 100;

if (billAmount > 1000) {
    let discount = billAmount * 0.10;
    billAmount = billAmount - discount;
}
console.log("Final Bill Amount: ₹" + billAmount);