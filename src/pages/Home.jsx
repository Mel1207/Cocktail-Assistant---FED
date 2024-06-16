import React, { useState, useEffect } from 'react'
import IconSearch from '../assets/icon-search.svg'

const Home = () => {
  const [drinks, setDrinks] = useState([]);
  const handleSearch = () => {
    console.log(drinks)
    console.log('test')

    setDrinks([1,2,3,4,5])
    console.log(drinks)

    setTimeout(() => {
      console.log('After setDrinks:', drinks);
    }, 1000);
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
          <h2>bottom content here</h2>
          {drinks.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home