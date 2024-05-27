import create from "zustand"
import stores from "@/lib/store.json"
import upgrades from "@/lib/upgrades.json"
import type { Store, Upgrade } from "@/types"

interface State {
  playing: boolean
  cats: number
  catsPerSecond: number
  upgrades: Upgrade[]
  stores: Store[]
  fetchUpgrades: () => void
  fetchStores: () => void
  increaseCats: () => void
  removeAllCats: () => void
  updateCats: (newCats: number) => void
  setPlaying: (value: boolean) => void
  reset: () => void
}

export const useStore = create<State>((set) => ({
  playing: false,
  cats: 0,
  catsPerSecond: 0,
  stores: [],
  upgrades: [],
  increaseCats: () => set((state) => ({ cats: state.cats + 1 })),
  removeAllCats: () => set({ cats: 0 }),
  updateCats: (newCats) => set({ cats: newCats }),

  fetchStores: () => {
    set({ stores })
  },

  fetchUpgrades: () => {
    set({ upgrades })
  },

  setPlaying: (value: boolean) => {
    set({ playing: value })
  },

  reset: () => {
    set({ cats: 0, stores: [], upgrades: [] })
  },
}))
