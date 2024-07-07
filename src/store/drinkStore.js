import { create } from "zustand"

export const useDrinkStore = create(set => ({
  drinks: [],
  inputValue: '',
  setInputValue: (value) => set({inputValue: value}), 
  handleSearchDrink: async (inputValue) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    if(!response.status === 200) {
      console.log('searching')
    }
    const data = await response.json()
    set({ drinks: data.drinks})
  },
}))
