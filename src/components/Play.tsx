"use client"

import { useMiaudleStore } from "@/lib/miaudleStore"
import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Play() {
  const {
    totalCats,
    clicks,
    catsPerSecond,
    incrementCats,
    increasePassiveIncome,
  } = useMiaudleStore()

  useEffect(() => {
    const interval = setInterval(() => {
      increasePassiveIncome()
    }, 1000)

    return () => clearInterval(interval)
  }, [catsPerSecond, increasePassiveIncome])

  return (
    <Card>
      <CardHeader>
        <h1>Miaudle</h1>
      </CardHeader>
      <CardContent>
        <button
          onClick={() => incrementCats(1)}
          className="hover:scale-105 hover:transition-all"
        >
          <img src="cat.png" alt="cat" />
        </button>
      </CardContent>
      <CardFooter>
        <h3>Total cats: {totalCats}</h3>
        <h3>Cats per second: {catsPerSecond}</h3>
        <p>Clicks totales: {clicks}</p>
      </CardFooter>
    </Card>
  )
}
