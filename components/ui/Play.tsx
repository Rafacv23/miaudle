import React from "react"
import Cat from "./Cat"
import Store from "./Store"
import Upgrades from "./Upgrades"
import Header from "./Header"

export default function Play() {
  return (
    <div
      className="grid grid-cols-1 max-w-xl gap-4 items-
    center justify-center py-8 md:py-10"
    >
      <Header />
      <Cat />
      <Store />
    </div>
  )
}
