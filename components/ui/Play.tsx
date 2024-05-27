import React from "react"
import Cat from "./Cat"
import Store from "./Store"
import Upgrades from "./Upgrades"

export default function Play() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center py-8 md:py-10">
      <div className="md:col-span-1">
        <Cat />
      </div>
      <div className="md:col-span-1">
        <Store />
      </div>
      <div className="md:col-span-1">
        <Upgrades />
      </div>
    </div>
  )
}
