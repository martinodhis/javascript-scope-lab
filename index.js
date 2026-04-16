// ============================================
// Step 1: Variable Data (Global Scope)
// ============================================

// Declare burgers in global scope using const
const burgers = ['Hamburger', 'Cheeseburger'];

// Declare featuredDrink in global scope using let
let featuredDrink = 'Strawberry Milkshake';


// ============================================
// Step 2: Function and Block (Function Scope)
// ============================================

// Write a function named addBurger
function addBurger() {
    // Creates a function-scoped variable named newBurger using const
    const newBurger = 'Flatburger';
    
    // Uses the .push() array method to add newBurger to the burgers array
    burgers.push(newBurger);
}


// ============================================
// Step 3: Variable Declaration and Scope
// ============================================

// if statement with condition true (Block Scope)
if (true) {
    // Creates a block-scoped variable named anotherNewBurger using const
    const anotherNewBurger = 'Maple Bacon Burger';
    
    // Uses the .push() array method to add anotherNewBurger to the burgers array
    burgers.push(anotherNewBurger);
}

// Write a function named changeFeaturedDrink
function changeFeaturedDrink() {
    // Changes the value of the featuredDrink variable to 'The JavaShake'
    featuredDrink = 'The JavaShake';
}
// Check initial values
console.log(burgers);           // ['Hamburger', 'Cheeseburger', 'Maple Bacon Burger']
console.log(featuredDrink);     // 'Strawberry Milkshake'

// Call the functions
addBurger();
console.log(burgers);           // ['Hamburger', 'Cheeseburger', 'Maple Bacon Burger', 'Flatburger']

changeFeaturedDrink();
console.log(featuredDrink);     // 'The JavaShake'
