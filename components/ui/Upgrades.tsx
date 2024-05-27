"use client"

import React from "react"
import { useStore } from "@/lib/CatsStorage"

export default function Upgrades() {
  const fetchUpgrades = useStore((state) => state.fetchUpgrades)
  const upgrades = useStore((state) => state.upgrades)

  if (upgrades.length === 0) {
    fetchUpgrades()
  }
  return (
    <section>
      <h2>Upgrades</h2>
      <ul>
        {upgrades ? upgrades.map((upgrade) => <li key={upgrade.id}>{upgrade.name} | {upgrade.price}</li>) : null}
      </ul>
    </section>
  )
}
