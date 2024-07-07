import React, { useState, useEffect } from 'react'
import IconSearch from '../assets/icon-search.svg'
import { useDrinkStore } from '../store/drinkStore';

const Home = () => {
  const [ingredientList, setIngredientList] = useState([])
  const { handleSearchDrink, drinks } = useDrinkStore()

  const handleAddToShop = (drink) => {
    console.log('item added')
    const newIngredients = [];

    for(let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`]

      if (ingredient && !newIngredients.includes(ingredient)) {
        newIngredients.push(ingredient);
      }

    }

    setIngredientList((prevIngredients) => {
      const uniqueIngredients = [...new Set([...prevIngredients, ...newIngredients])]
      return uniqueIngredients
    })

    // const unique = Array.from(new Set(ingredientList.map(ingredient => 
    //   ingredient.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
    // )));
    // setIngredientList(unique)
  }

  
  return (
    <div className='content'>
      <div className="container top-content">
        <div className='greetings'>
          <h1>Hello Mel👋</h1>
          <p>What do you want to order?</p>
          {ingredientList.map(item => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="search">
          <input type='text' placeholder='Search...'/>
          <button type='button' className='btn btn-primary' onClick={ handleSearchDrink }>
            <img src={IconSearch} alt="search" />
            Search
          </button>
        </div>
      </div>
      <div className="container">
        <div className="bottom-content">
          {drinks.map(item => (
            <div className='drink-card' key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} className='drink-thumbnail'/>
              <div className='drink-details'>
                <p className='drink-title'>{item.strDrink}</p>
                <span className='drink-category'>{item.strCategory}</span>
                <p className='drink-instructions'>{item.strInstructions}</p>

                <h3>Ingredients</h3>
                <p>{item.strIngredient1}</p>
                <p>{item.strIngredient2}</p>
                <p>{item.strIngredient3}</p>
                <p>{item.strIngredient4}</p>
                <p>{item.strIngredient5}</p>
                <p>{item.strIngredient6}</p>
                <p>{item.strIngredient7}</p>
                <p>{item.strIngredient8}</p>
                <p>{item.strIngredient9}</p>
                <p>{item.strIngredient10}</p>
                <p>{item.strIngredient11}</p>
                <p>{item.strIngredient12}</p>
                <p>{item.strIngredient13}</p>
                <p>{item.strIngredient14}</p>
                <p>{item.strIngredient15}</p>
                <button className='btn btn-primary' onClick={() => handleAddToShop(item)}>Add to shopping list</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home