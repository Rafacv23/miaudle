import create from "zustand"
import type { CatStore } from "@/types"

export const useStore = create<CatStore>((set) => ({
  cats: 0,
  increasePopulation: () => set((state) => ({ cats: state.cats + 1 })),
  removeAllCats: () => set({ cats: 0 }),
  updateCats: (newCats) => set({ cats: newCats }),
}))
