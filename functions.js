// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
let arr1 = ["Pasta", "Drinks", "Vegetables", "Eggs", "Cereals","Fruits", "Snacks"] 

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let arr2 = [{grocery:"Pasta",quantity:3}, {grocery:"Drinks",quantity: 5}, {grocery:"Vegetables",quantity:2}, {grocery:"Eggs",quantity:8},{grocery: "Cereals",quantity:4}, {grocery:"Fruits",quantity:6}, {grocery:"Snacks",quantity:7 }]
// Write a function to add a new item to the inventory, updating both arrays.
function addItem() 
{
  arr1.push("soap")
  arr2.push({grocery:"soap",quantity:2})
   
}
addItem() 
console.log(arr1);
console.log(arr2);

// Write a function to update the stock quantity of an existing item.
const updateInventory = arr2.map(Item=>{
  if (Item.grocery == "Eggs"){
    Item.quantity=10
  }
  return Item;
})
console.log(updateInventory);
// Write a function to calculate the total number of items in the inventory.
function totalQuantity(Item) {
  return Item.quantity;
}
function sum(prevAmount, nextAmount){
  return  prevAmount+ nextAmount;
}
console.log(arr2.map(totalQuantity).reduce(sum));
// Write a function to find the item with the lowest stock quantity.
let minimumStock = Math.min(...arr2.map(Item=>Item.quantity));
console.log(minimumStock)