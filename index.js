// Check global variables
console.log(burgers); 
// Expected: ['Hamburger', 'Cheeseburger', 'Flatburger', 'Maple Bacon Burger']

console.log(featuredDrink); 
// Expected: 'Strawberry Milkshake'

// Test addBurger function
addBurger();
console.log(burgers); 
// Should now include another 'Flatburger'

// Test changeFeaturedDrink function
changeFeaturedDrink();
console.log(featuredDrink); 
// Expected: 'The JavaShake'

// Verify block scope - this will cause ReferenceError:
console.log(anotherNewBurger); // ❌ Not accessible outside if block
console.log(newBurger);        // ❌ Not accessible outside addBurger function