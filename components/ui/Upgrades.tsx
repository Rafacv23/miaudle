"use client"

import React from "react"
import { useStore } from "@/lib/CatsStorage"

export default function Upgrades() {
  const fetchUpgrades = useStore((state) => state.fetchUpgrades)
  const upgrades = useStore((state) => state.upgrades)
  const cats = useStore((state) => state.cats)
  const clickPower = useStore((state) => state.clickPower)
  const catsPerSecond = useStore((state) => state.catsPerSecond)
  const updateCats = useStore((state) => state.updateCats)
  const setCatsPerSecond = useStore((state) => state.setCatsPerSecond)
  const setClickPower = useStore((state) => state.setClickPower)
  const setStores = useStore((state) => state.setStores)
  const stores = useStore((state) => state.stores)

  React.useEffect(() => {
    if (upgrades.length === 0) {
      fetchUpgrades()
    }
  }, [fetchUpgrades, upgrades.length])

  const buyUpgrade = (upgradeId: number) => {
    const upgrade = upgrades.find((upgrade) => upgrade.id === upgradeId)
    if (upgrade && cats >= upgrade.price) {
      updateCats(cats - upgrade.price)

      switch (upgrade.type) {
        case "click":
          setClickPower(clickPower + upgrade.value)
          break
        case "autoClick":
          setCatsPerSecond(catsPerSecond + upgrade.value)
          break
        case "multiplier":
          const newStores = stores.map((store) => {
            if (store.id === upgrade.storeId) {
              return {
                ...store,
                catsPerSecond: store.catsPerSecond * upgrade.value,
              }
            }
            return store
          })
          setStores(newStores)
          break
      }

      // Remove the purchased upgrade from the list
      const newUpgrades = upgrades.filter((u) => u.id !== upgradeId)
      useStore.getState().setUpgrades(newUpgrades)
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">UPGRADES</h2>
      <ul>
        {upgrades.map((upgrade) => (
          <li key={upgrade.id} className="mb-4 flex items-center">
            <img
              src={upgrade.icon}
              alt={upgrade.name}
              className="w-8 h-8 mr-4"
            />
            <div>
              <div>{upgrade.name}</div>
              <div>{upgrade.description}</div>
              <div>Price: {upgrade.price}</div>
              <button
                onClick={() => buyUpgrade(upgrade.id)}
                disabled={cats < upgrade.price}
                className="ml-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-500"
              >
                Buy
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
