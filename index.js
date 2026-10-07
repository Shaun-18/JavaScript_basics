let shoppingList = ["Milk", "Eggs", "Bread", "Butter", "Cheese"];
//shoppingList.push("Apples");
//console.log(shoppingList);

let employees = ["John", "Jane", "Bob", "Alice", "Tom"];
employees.shift();
if (employees.includes("John")) {
    console.log("John is still in the list.");
} else {
    console.log("John has been removed from the list.");
    employees.unshift("John");
}

console.log(employees);

let priceList = [2.99, 1.99, 3.49, 4.99, 5.99];


let cities = ["Johanessburg", "Durban", "Bloemfontein", "Cape Town", "Pretoria"];