// ✅ GLOBAL SCOPE: Accessible everywhere in the script
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// ✅ FUNCTION: Demonstrates function-level and block-level scope
function addBurger() {
  // Function-scoped variable (declared at the top level of the function)
  const newBurger = 'Flatburger';
  burgers.push(newBurger);

  if (true) {
    // Block-scoped variable (only exists inside these curly braces)
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
  }
}

// ✅ FUNCTION: Modifies the global featuredDrink variable
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

addBurger();
changeFeaturedDrink();
console.log(burgers, featuredDrink);