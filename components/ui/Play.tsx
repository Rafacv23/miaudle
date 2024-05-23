import React from "react"
import Cat from "./Cat"
import Store from "./Store"
import Upgrades from "./Upgrades"

export default function Play() {
  return (
    <div className="grid md:grid-cols-2 items-center justify-center gap-4 py-8 md:py-10">
      <Cat />
      <div className="flex flex-col gap-4">
        <Store />
        <Upgrades />
      </div>
    </div>
  )
}
