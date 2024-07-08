import IconSearch from '../assets/icon-search.svg'
import { useDrinkStore } from '../store/drinkStore';
import { useCartStore } from '../store/cartStore';

const Home = () => {
  const { handleSearchDrink, drinks, inputValue, setInputValue } = useDrinkStore()
  const { addToCart } = useCartStore()

  const handleInputChange = e => {
    setInputValue(e.target.value)
    // console.log(inputValue)
  }

  const handleSearch = () => {
    handleSearchDrink(inputValue)
    setInputValue('')
  }


  return (
    <div className='content'>
      <div className="container top-content">
        <div className='greetings'>
          <h1>Hello Mel👋</h1>
          <p>What do you want to order?</p>
        </div>
        <div className="search">
          <input type='text' placeholder='Search...' value={ inputValue } onChange={ handleInputChange }/>
          <button type='button' className='btn btn-primary' onClick={handleSearch}>
            <img src={IconSearch} alt="search" />Search
          </button>
        </div>
      </div>
      <div className="container">
        <div className="bottom-content">
          {drinks.map(item => (
            <div className='drink-card' key={item.idDrink}>
              <img src={item.strDrinkThumb} alt={item.strDrink} className='drink-thumbnail'/>
              <div className='drink-details'>
                <div>
                  <p className='drink-title'>{item.strDrink}</p>
                  <span className='drink-category'>{item.strCategory}</span>
                  <p className='drink-instructions'>{item.strInstructions}</p>

                  <h3>Ingredients</h3>
                  <ul>
                    {Array.from({ length: 15 }).map((_, index) => {
                      const ingredient = item[`strIngredient${index + 1}`]
                      return ingredient ? <li key={index}>{ingredient}</li> : null
                    })}
                  </ul>
                </div>
                <button className='btn btn-primary' onClick={() => addToCart(item) }>Add to shopping list</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Home