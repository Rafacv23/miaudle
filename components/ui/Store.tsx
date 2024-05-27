"use client"

import React from "react"
import { useStore } from "@/lib/CatsStorage"

export default function Store() {
  const fetchStores = useStore((state) => state.fetchStores)
  const stores = useStore((state) => state.stores)

  // Conditionally call fetchStores if stores array is empty
  if (stores.length === 0) {
    fetchStores()
  }

  return (
    <section>
      <h2>Store</h2>
      <ul>
        {stores.length > 0 ? (
          stores.map((adquisition) => (
            <li key={adquisition.id}>
              <button>
                {adquisition.name} | {adquisition.price}
              </button>
            </li>
          ))
        ) : (
          <li>Loading stores...</li>
        )}
      </ul>
    </section>
  )
}
