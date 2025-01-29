"use client"

import { useMiaudleStore } from "@/lib/miaudleStore"
import { useEffect } from "react"

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
    <div>
      <h1>Miaudle</h1>
      <button onClick={() => incrementCats(1)}>
        <img src="cat.png" alt="cat" />
      </button>
      <h3>Total cats: {totalCats}</h3>
      <h3>Cats per second: {catsPerSecond}</h3>
      <p>Clicks totales: {clicks}</p>
    </div>
  )
}
