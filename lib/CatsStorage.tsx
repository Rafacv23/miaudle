import create from "zustand"
import stores from "@/lib/store.json"
import upgrades from "@/lib/upgrades.json"
import type { State, Store, Upgrade } from "@/types"
import { persist, createJSONStorage } from "zustand/middleware"
import React from "react"

export const useStore = create<State>(
  persist(
    (set) => ({
      playing: false,
      cats: 0,
      catsPerSecond: 0,
      clickPower: 1,
      stores: [],
      upgrades: [],
      setCatsPerSecond: (newCPS: number) => {
        set({ catsPerSecond: newCPS })
      },
      setClickPower: (newClickPower: number) => {
        set({ clickPower: newClickPower })
      },
      clickCats: () =>
        set((state) => ({
          cats: state.cats + state.clickPower,
        })),
      increaseCats: () =>
        set((state) => ({
          cats: state.cats + state.catsPerSecond,
        })),

      removeAllCats: () => set({ cats: 0 }),
      updateCats: (newCats) => set({ cats: newCats }),

      fetchStores: () => {
        set({ stores })
      },

      setStores: (newStores: Store[]) => {
        set({ stores: newStores })
      },

      setUpgrades: (newUpgrades: Upgrade[]) => {
        set({ upgrades: newUpgrades })
      },

      fetchUpgrades: () => {
        set({ upgrades })
      },

      setPlaying: (value: boolean) => {
        set({ playing: value })
      },

      reset: () => {
        set({
          cats: 0,
          stores: [],
          upgrades: [],
          catsPerSecond: 0,
          clickPower: 1,
        })
      },
    }),
    {
      name: "cats-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

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
