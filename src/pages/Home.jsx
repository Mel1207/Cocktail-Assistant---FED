import React, { useState, useEffect } from 'react'
import IconSearch from '../assets/icon-search.svg'

const Home = () => {
  const [query, setQuery] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleSearch = () => {
    setSubmittedQuery(query)
  }

  useEffect(() => {
    if(submittedQuery.trim() === '') return

    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${submittedQuery}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDrinks(data.drinks);
        console.log(drinks)
      } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData()
  }, [submittedQuery])

  
  return (
    <div className='content'>
      <div className="container top-content">
        <div className='greetings'>
          <h1>Hello Mel👋</h1>
          <p>What do you want to order?</p>
        </div>
        <div className="search">
          <input type="text" placeholder='search...' onChange={(e) => setQuery(e.target.value)}/>
          <button className='btn btn-primary' onClick={handleSearch}>
            <img src={IconSearch} alt="search" />
            Search
          </button>
        </div>
      </div>
      <div className="container">
        <div className="bottom-content">
          <h2>bottom content here</h2>
          {drinks.map(item => {
            <p key={item.idDrink}>{item.strDrink}</p>
          })}
        </div>
      </div>
    </div>
    
  )
}

export default Home