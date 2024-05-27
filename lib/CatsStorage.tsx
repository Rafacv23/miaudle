import create from "zustand"
import stores from "@/lib/store.json"
import upgrades from "@/lib/upgrades.json"
import type { Store, Upgrade } from "@/types"
import React from "react"

interface State {
  playing: boolean
  cats: number
  catsPerSecond: number
  setCatsPerSecond: (newCPS: number) => void
  upgrades: Upgrade[]
  stores: Store[]
  fetchUpgrades: () => void
  fetchStores: () => void
  setStores: (newStores: Store[]) => void
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
  setCatsPerSecond: (newCPS: number) => {
    set({ catsPerSecond: newCPS })
  },
  increaseCats: () => set((state) => ({ cats: state.cats + 1 })),
  removeAllCats: () => set({ cats: 0 }),
  updateCats: (newCats) => set({ cats: newCats }),

  fetchStores: () => {
    set({ stores })
  },

  setStores: (newStores: Store[]) => {
    set({ stores: newStores })
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

const useAutoIncrementCats = () => {
  const { catsPerSecond, increaseCats } = useStore((state) => ({
    catsPerSecond: state.catsPerSecond,
    increaseCats: state.increaseCats,
  }))

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (catsPerSecond > 0) {
        for (let i = 0; i < catsPerSecond; i++) {
          increaseCats()
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [catsPerSecond, increaseCats])
}

export default useAutoIncrementCats
