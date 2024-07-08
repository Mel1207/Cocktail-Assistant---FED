import { create } from 'zustand'

export const useGlobalStore = create((set) => ({
  isModalOpen: false, 
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false })
}))