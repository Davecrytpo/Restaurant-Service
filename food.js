// const foodInput = document.getElementById("foodInput");
// const drinkInput = document.getElementById("drinkInput");
// const addItemsButton = document.getElementById("addItemsButton");
// const Total = document.getElementById("Total");

// function Enter() {
//   var foodValue = foodInput.value;
//   const drinkValue = drinkInput.value;

//   var Total = foodValue + drinkValue;


// for (var key in foodItems) {
//   if (Object.hasOwnProperty.call(foodItems, key)) {
//     const Total = foodItems[key];
//     document.write(Total)
    
//   }
// }

function Enter(){
  const foodSelect = document.getElementById("foodSelect");
  const selectedFood = foodSelect.value;
  

  const drinkSelect = document.getElementById("drinkSelect");
  const selectedDrink = drinkSelect.value;

// Arrays for food and drinks items
const foodItems = {
  Smallchops: 37,
  ChickenChips: 23,
  JollofRiceBeef: 70,
  SandWiches: 66,
  Sharwama: 85,
  HotDog: 40,
  FrenchFries: 50,
  BUGGER: 25,
  PIZZA: 90
};
  

const drinkItems = {
  FruitJuice: 75,
  Coffee: 65,
  HotTea: 95,
  Americano: 75,
  Latte: 45,
  OldFashioned: 25,
  WhiskeySour: 95,
  TableWater: 50,
  Vodkasoda: 45
};


const foodPrice = foodItems[selectedFood] || 0;
const drinkPrice = drinkItems[selectedDrink] || 0;
const totalAmount = foodPrice + drinkPrice;

// display the Total AMount
const totalAmountDisplay = document.getElementById("totalAmountDisplay");
totalAmountDisplay.textContent = `Total Amount cost: $${totalAmount}`;





// document.addEventListener("DOMContentLoaded", function (){
//   const foodInput = document.getElementById("foodInput");
//   const drinkInput = document.getElementById("drinkInput");
//   const addItemsButton = document.getElementById("addItemsButton");
//   const totalAmountDisplay = document.getElementById("totalAmountDisplay");

//   addItemsButton.addEventListener("click", function () {
//     const selectedFood = foodSelect.value;
//     const selectedDrink = drinkSelect.value;

//     const selectedFoodAmount = parseFloat(foodItems[selectedFood]) || 0;
//     const selectedDrinkAmount = parseFloat(selectedDrink[drinkItems]) || 0;

//     const totalAmount = selectedFoodAmount + selectedDrinkAmount;

//     totalAmountDisplay.textcontext = "$" + totalAmount.toFixed(2);
//   });
// });
}
// }
  // if (foodValue.trim() !== "HotDog") {
  //   foodItems.push(foodValue);
  // }
  // if (drinkValue.trim() !== "Tablewater") {
  //   drinkItems.push(drinkValue);
  // }

  // updateTotal();
  // clearInputs();


// Function to update the list of items in the UI
// function updateTotal() {
//   Total.innerHTML = "";

//   foodItems.forEach((food) => {
//     const foodItem = document.createElement("li");
//     foodItem.textContent = `Food: ${food}`;
//     itemList.appendChild(foodItem);
//   });

//   drinkItems.forEach((drink) => {
//     const drinkItem = document.createElement("li");
//     drinkItem.textContent = `Drink: ${drink}`;
//     itemList.appendChild(drinkItem);
//   });
// }

// // Function to clear input fields
// function clearInputs() {
//   foodInput.value = "";
//   drinkInput.value = "";
// }

// // Attach the addItem function to the button click event
// addItemButton.addEventListener("click", addItem);
