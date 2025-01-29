"use client"

import { useMiaudleStore } from "@/lib/miaudleStore"
import { getAllUpgrades } from "@/lib/upgrades"
import { useEffect } from "react"

export default function Upgrades() {
  const upgrades = getAllUpgrades()

  const {
    totalCats,
    catsPerSecond,
    clicks,
    buyUpgrade,
    checkUnlockedUpgrades,
    unlockedUpgrades,
    ownedUpgrades,
  } = useMiaudleStore()

  useEffect(() => {
    checkUnlockedUpgrades()
  }, [totalCats, catsPerSecond, clicks, checkUnlockedUpgrades])

  return (
    <div>
      <h2>Upgrades</h2>
      <ul>
        {unlockedUpgrades.map((upgradeId) => {
          const upgrade = upgrades.find((u) => u.id === upgradeId)
          if (upgrade) {
            const timesBought = ownedUpgrades[upgradeId] || 0
            const newCost = Math.floor(
              upgrade!.cost * Math.pow(1.15, timesBought)
            )

            return (
              <li key={upgrade.name} onClick={() => buyUpgrade(upgrade.id)}>
                <h3>{upgrade.name}</h3>
                <p>Times bought: {timesBought}</p>
                <p>Cost: {newCost}</p>
                <button>Buy</button>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
