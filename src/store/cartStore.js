import { create } from "zustand"

export const useCartStore = create((set) => ({
  cart: [], 
  AddToCart: (ingredient) => set((state) => ({cart: [...state.cart, ingredient]})),
  removeFromCart: (item) => set((state) => ({cart: state.cart.filter(item => cart.item !== item)}))
}))

