import React, { useState, useEffect } from 'react'
import IconSearch from '../assets/icon-search.svg'

const Home = () => {
  const [drinks, setDrinks] = useState([]);


  const handleSearch = async () => {
    
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      if(!response.status === 200) {
        console.log('searching')
      }
      const data = await response.json()
      setDrinks(data.drinks)
      console.log('item search')
    } catch (error) {
      console.log('error fetching data', error)
    }
  }

  
  return (
    <div className='content'>
      <div className="container top-content">
        <div className='greetings'>
          <h1>Hello Mel👋</h1>
          <p>What do you want to order?</p>
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
                <button className='btn btn-primary'>Add to shopping list</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home