


const pokemon = require('./data.js');
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}



// Exercise 1
// Spend some time inspecting the pokemon array by running the following command:

// Copy
// console.dir(pokemon, { maxArrayLength: null })


// Exercise 2
// Next, add the following console.log:

// Run the following:

// Copy
// console.log(game)


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = 'Easy'
// console.log(game);



/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// is there a way to do this without knowing the index? why wouldn't pokemon[starter] work?
game.party.push(pokemon[0]);
console.log('Exercise 4:',game);






/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


// grabs all of the starter pokemon for problem 7/ starting at index 1 since i have bulbasore already
for(let i = 1; i < pokemon.length; i++){
    if(pokemon[i].starter === true){
        game.party.push(pokemon[i])
    }
}





// // chose random pokemon
// const randomPokemon = Math.floor(Math.random()*100) + 1; // random pokemon number between 1 - 100
// game.party.push(pokemon[randomPokemon], pokemon[randomPokemon + 5], pokemon[randomPokemon + 10]);// added + 5 and + 10 to the random pokemon to get different ones
console.log('Exercise 5:',game);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// loop through the each index in the gyms array within the game object
for(let i = 0; i < game.gyms.length; i++){
    // if the gyms array at index i < 3 then
    if(game.gyms[i].difficulty < 3){
        // update the gyms array at index i object completed to true
        game.gyms[i].completed = true;
    }

}

console.log('Exercise 6:',game);



/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/


// tried to update all of the starters 
// for(let i = 0; i < pokemon.length; i++){
//     for(let i = 0; i < game.party.length; i++){ 
//         if(pokemon[i].number === game.party[i].number + 1 ){
//             game.party.splice(i,1, pokemon[i].number);  
//         }
//     } 
//     // take the party array and number then add 1 to get its evolution number, and find that
    
//     // number in the pokemon array.
//     // once i've found that number splice it into the party array where the original number was 
// }


game.party.splice(0,1,pokemon[1])
console.log('excercise 7:',game.party[0]);








/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log('Excercies 8');
for(let i = 0; i < game.party.length; i++){
    console.log(game.party[i].name);
}







/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

console.log('Excercise 9');
for(let i = 0; i < pokemon.length; i++){
    if(pokemon[i].starter === true){
        console.log(pokemon[i].name);
    }
   
}




/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

const pokemonObj = {};
pokemonObj.catchPokemon = function(){
    return;
}
pokemonObj.catchPokemon();
game.party.push(pokemonObj);

console.log('Excercies 10:',game.party);






/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. 
Modify it so that it also decreases the number of pokeballs in your inventory each 
time you catch a Pokémon.

2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the
 `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/



// const pokemonObj = {};
pokemonObj.catchPokemon = function(caught){
    if(caught === 'yes'){
        console.log(caught);
        return game.items[1].quantity = game.items[1].quantity - 1
      
    }
}
console.log('Excercise 11',pokemonObj.catchPokemon('yes'));
console.log('Excercise 11',game.items); 







/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/



// loop through the each index in the gyms array within the game object
for(let i = 0; i < game.gyms.length; i++){
    // if the gyms array at index i < 3 then
    if(game.gyms[i].difficulty < 6){
        // update the gyms array at index i object completed to true
        game.gyms[i].completed = true;
    }

}

console.log('Exercise 12:',game.gyms);



/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const gymTally = {complete: 0, incomplete: 0}

game.gymStatus = function(){
    for(let i = 0; i < game.gyms.length; i++){
        if(game.gyms[i].completed === true){
            gymTally.complete++
            // console.log('complete:',gymTally.complete);
        }else{
            gymTally.incomplete++
            // console.log('incomplete:',gymTally.incomplete);
        }
    }
}
game.gymStatus();
console.log(gymTally);
// console.log(game);




/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = () => game.party.length - 1;// subracting 1 because the last index in the party array is a method

console.log(game.partyCount());
console.log(game);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/


for(let i = 0; i < game.gyms.length; i++){
    // if the gyms array at index i < 3 then
    if(game.gyms[i].difficulty < 8){
        // update the gyms array at index i object completed to true
        game.gyms[i].completed = true;
    }

}

console.log('Exercise 15:',game.gyms);



/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.

Solve Exercise 16 here:
*/
console.log('Excercise 16:', game);
