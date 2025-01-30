"use client"

import { useMiaudleStore } from "@/lib/miaudleStore"
import { getAllUpgrades } from "@/lib/upgrades"
import { useEffect } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import UpgradeCard from "@/components/UpgradeCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <Card>
      <CardHeader>
        <CardTitle>Upgrades</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
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
      </CardContent>
    </Card>
  )
}
