"use client"

import { getAllPassives } from "@/lib/passives"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useMiaudleStore } from "@/lib/miaudleStore"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useEffect } from "react"
import PassiveCard from "@/components/PassiveCard"

export default function Passives() {
  const passives = getAllPassives()

  const {
    totalCats,
    catsPerSecond,
    clicks,
    checkUnlockedPassives,
    unlockedPassives,
  } = useMiaudleStore()

  useEffect(() => {
    checkUnlockedPassives()
  }, [totalCats, catsPerSecond, clicks, checkUnlockedPassives])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Passives</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          <TooltipProvider>
            {unlockedPassives.map((passiveId) => {
              const passive = passives.find((p) => p.id === passiveId)
              if (passive) {
                return <PassiveCard key={passive.id} passive={passive} />
              }
            })}
          </TooltipProvider>
        </ul>
      </CardContent>
    </Card>
  )
}
