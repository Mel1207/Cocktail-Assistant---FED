import React, { useState } from 'react'

const DuplicateList = () => {
  const [ingredients, setIngredients] = useState([
    "Tequila", "Lime Juice", "Vodka", "Lime juice", "Orange Juice", "Orange juice"
  ]);

  const removeDuplicates = () => {
    // // Use a Set to store unique ingredients
    // const uniqueIngredientsSet = new Set(ingredients);
    // // Convert the Set back to an array and update the state
    // console.log(uniqueIngredientsSet)
    // setIngredients(Array.from(uniqueIngredientsSet));

    const unique = Array.from(new Set(ingredients.map(ingredient => 
      ingredient.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
    )));
    setIngredients(unique)
    
  };

  return (
    <div style={{marginTop: "100px"}}>
      <h1>Ingredients</h1>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={removeDuplicates}>Remove Duplicates</button>
    </div>
  );
}

export default DuplicateList