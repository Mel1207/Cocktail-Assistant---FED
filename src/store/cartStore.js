import { create } from "zustand"

export const useCartStore = create((set) => ({
  cart: [], 
  addToCart: (item) => {
    // console.log('this one was added to cart')
    const newIngredients = []

    for(let i = 1; i <= 15; i++) {
      const ingredient = item[`strIngredient${i}`]

      if(ingredient && !newIngredients.includes(ingredient)) {
        newIngredients.push(ingredient)
      }
    }

    set(state => {
      const uniqueIngredients = [...new Set([...state.cart, ...newIngredients])]
      return { cart: uniqueIngredients }
    })
    
  },
  removeFromCart: (item) => {
    console.log(`${item} was removed`)
  }
  
}))

