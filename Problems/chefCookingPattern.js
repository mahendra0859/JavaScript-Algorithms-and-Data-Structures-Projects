/**
 * Coding Challeng from coding game
 * Chef's cooking patter
 */

const chefCookingPattern = (arr) => {
  let fiberCount = 0,
    fatCount = 0,
    carbCount = 0,
    cookingPattern = "";
  let ingredientArr = [];
  for (let i = 0; i < arr.length; i++) {
    const ingredient = arr[i];
    ingredientArr.push(ingredient);
    if (ingredient.includes("FAT")) {
      fatCount++;
    } else if (ingredient.includes("FIBER")) {
      fiberCount++;
    } else if (ingredient.includes("CARB")) {
      carbCount++;
    }
    if (
      (fiberCount >= 2 || (fatCount >= 2) | (carbCount >= 2)) &&
      ingredientArr.length >= 3
    ) {
      if (fatCount >= 2) {
        fatCount -= 2;
        ingredientArr = ingredientArr.filter((ele) => !ele.includes("FAT"));
      } else if (fiberCount >= 2) {
        fiberCount -= 2;
        ingredientArr = ingredientArr.filter((ele) => !ele.includes("FIBER"));
      } else if (carbCount >= 2) {
        carbCount -= 2;
        ingredientArr = ingredientArr.filter((ele) => !ele.includes("CARB"));
      }
      if (ingredientArr.length) {
        let ele = ingredientArr[0];
        if (ele.includes("FAT") && fatCount >= 1) {
          fatCount -= 1;
        } else if (ele.includes("FIBER") && fiberCount >= 1) {
          fiberCount -= 1;
        } else if (ele.includes("CARB") && carbCount >= 1) {
          carbCount -= 1;
        }
        ingredientArr.splice(0, 1);
      }
      cookingPattern += 1;
    } else {
      cookingPattern += 0;
    }
  }
  return cookingPattern;
};

console.log(
  "chefCookingPattern",
  chefCookingPattern([
    "CARBBeetroot",
    "FIBERCarrot",
    "FATOlive",
    "CARBCorn",
    "CARBPotato",
    "FIBERBroccoli",
    "FATEgg",
    "FIBERBeans",
    "FATCheese",
    "CARBRice",
    "FIBERSpinach",
    "FATOil",
  ])
);
console.log(
  "chefCookingPattern",
  chefCookingPattern([
    "FATOil",
    "FIBERSpinach",
    "CARBRice",
    "FATCheese",
    "FIBERBeans",
    "FATEgg",
    "FIBERBroccoli",
    "CARBPotato",
    "CARBCorn",
    "FATOlive",
    "FIBERCarrot",
    "CARBBeetroot",
  ])
);
console.log(
  "chefCookingPattern",
  chefCookingPattern([
    "FATOil",
    "FATCheese",
    "FATEgg",
    "FIBERSpinach",
    "CARBRice",
    "FIBERBeans",
  ])
);
console.log(
  "chefCookingPattern",
  chefCookingPattern([
    "FATOil",
    "FIBERSpinach",
    "CARBRice",
    "FATCheese",
    "FIBERBeans",
  ])
);
