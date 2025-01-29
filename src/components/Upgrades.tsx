"use client"

import { useMiaudleStore } from "@/lib/miaudleStore"
import { getAllUpgrades } from "@/lib/upgrades"
import { useEffect } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import UpgradeCard from "./UpgradeCard"

export default function Upgrades() {
  const upgrades = getAllUpgrades()

  const {
    totalCats,
    catsPerSecond,
    clicks,
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
        <TooltipProvider>
          {unlockedUpgrades.map((upgradeId) => {
            const upgrade = upgrades.find((u) => u.id === upgradeId)
            if (upgrade) {
              const timesBought = ownedUpgrades[upgradeId] || 0
              const newCost = Math.floor(
                upgrade!.cost * Math.pow(1.15, timesBought)
              )

              return (
                <UpgradeCard
                  key={upgrade.name}
                  upgrade={upgrade}
                  timesBought={timesBought}
                  newCost={newCost}
                />
              )
            }
          })}
        </TooltipProvider>
      </ul>
    </div>
  )
}
