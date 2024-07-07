import React from 'react'
import { useState } from 'react';
import '../styles/un.css'

const UniqueList = () => {
  const drinks = [
    {
      idDrink: "11007",
      strDrink: "Margarita",
      strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it...",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      strIngredient1: "Tequila",
      strIngredient2: "Triple sec",
      strIngredient3: "Lime juice",
      strIngredient4: "Salt",
      strIngredient5: null,
    },
    {
      idDrink: "11118",
      strDrink: "Blue Margarita",
      strInstructions: "Rub rim of cocktail glass with lime juice...",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
      strIngredient1: "Tequila",
      strIngredient2: "Blue Curacao",
      strIngredient3: "Lime juice",
      strIngredient4: "Salt",
      strIngredient5: null,
    },
    {
      idDrink: "17216",
      strDrink: "Tommy's Margarita",
      strInstructions: "Shake and strain into a chilled cocktail glass.",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
      strIngredient1: "Tequila",
      strIngredient2: "Lime Juice",
      strIngredient3: "Agave syrup",
      strIngredient4: null,
    },
  ];

  const [uniqueIngredients, setUniqueIngredients] = useState(new Set());
  const handleCollectIngredients = (ingredients) => {
    const newIngredients = new Set(uniqueIngredients);
    ingredients.forEach(ingredient => {
      if (ingredient) newIngredients.add(ingredient);
    });
    setUniqueIngredients(newIngredients);
  };
  return (
    <div className="App">
      <h1>Drink Recipes</h1>
      <div className="drinks-container">
        {drinks.map(drink => (
          <div key={drink.idDrink} className="drink-card">
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <p>{drink.strInstructions}</p>
            <button onClick={() => handleCollectIngredients([
              drink.strIngredient1, 
              drink.strIngredient2, 
              drink.strIngredient3, 
              drink.strIngredient4, 
              drink.strIngredient5
            ])}>Collect Ingredients</button>
          </div>
        ))}
      </div>
      <div className="ingredients-container">
        <h2>Unique Ingredients</h2>
        <ul>
          {[...uniqueIngredients].map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UniqueList