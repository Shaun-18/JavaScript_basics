let Custname = "Kagiso Molefe";
let CDBookname = "JavaScript for Beginners";
let isInstock = true;
let Amountdue ;
let Address = "123 Main St, Anytown, USA";
let Itemprice = 19.99;
let quantity = 3;
let isInsure = false;
let shippingCost = 5.99;
let InsuranceCost = 2.00;

if (isInstock === true && isInsure === true) {
    Amountdue = (Itemprice * quantity) + shippingCost + InsuranceCost;
    console.log("The amount due is: " + Amountdue);
     console.log(Custname + " The " + CDBookname + " is in stock and will be shipped to: " + Address);
} else {

  if (isInstock === true && isInsure === false) {
    Amountdue = (Itemprice * quantity) + shippingCost;
    console.log("The amount due is: " + Amountdue);
    console.log(Custname + " The " + CDBookname + " is in stock and will be shipped to: " + Address);
  } else {
    console.log(Custname + " The " + CDBookname + " is out of stock.");
  }
}