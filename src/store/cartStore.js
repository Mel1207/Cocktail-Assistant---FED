import { create } from "zustand"

export const useCartStore = create((set) => ({
  cart: [], 
  addToCart: (item) => {
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

  removeFromCart: (item) => set(state => ({
    cart: state.cart.filter((_, index) => index !== item)
  })),
}))

