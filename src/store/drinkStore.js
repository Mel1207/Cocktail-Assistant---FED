import { create } from "zustand"

export const useDrinkStore = create(set => ({
  drinks: [],
  handleSearchDrink: async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    if(!response.status === 200) {
      console.log('searching')
    }
    const data = await response.json()
    set({ drinks: data.drinks})
    // const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    // if(!response.status === 200) {
    //   console.log('searching')
    // }
    console.log('test from store')
  }

}))

// try {
//   const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//   if(!response.status === 200) {
//     console.log('searching')
//   }
//   const data = await response.json()
//   setDrinks(data.drinks)
//   console.log(data.drinks)
// } catch (error) {
//   console.log('error fetching data', error)
// }