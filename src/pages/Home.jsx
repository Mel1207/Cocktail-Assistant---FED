import React, { useState, useEffect } from 'react'
import IconSearch from '../assets/icon-search.svg'

const Home = () => {
  const [drinks, setDrinks] = useState([]);
  const [ingredientList, setIngredientList] = useState([])


  const handleSearch = async () => {
    
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      if(!response.status === 200) {
        console.log('searching')
      }
      const data = await response.json()
      setDrinks(data.drinks)
      console.log(data.drinks)
    } catch (error) {
      console.log('error fetching data', error)
    }
  }

  const handleAddToShop = (item) => {
    console.log('item added')
    const extractedIngredients = []

    for(let i = 1; i <= 15; i++) {
      const ingredient = item[`strIngredient${i}`]

      if(ingredient) {
        extractedIngredients.push(ingredient)
      }
    }

    setIngredientList(extractedIngredients)
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
          <button type='button' className='btn btn-primary' onClick={handleSearch}>
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