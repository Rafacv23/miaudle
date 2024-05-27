"use client"

import React, { useEffect } from "react"
import { useStore } from "@/lib/CatsStorage"
import { Button } from "@nextui-org/button"
import { Tooltip } from "@nextui-org/tooltip"

export default function Store() {
  const fetchStores = useStore((state) => state.fetchStores)
  const stores = useStore((state) => state.stores)
  const cats = useStore((state) => state.cats)
  const updateCats = useStore((state) => state.updateCats)
  const catsPerSecond = useStore((state) => state.catsPerSecond)
  const setCatsPerSecond = useStore((state) => state.setCatsPerSecond)
  const setStores = useStore((state) => state.setStores)

  // Conditionally call fetchStores if stores array is empty
  useEffect(() => {
    if (stores.length === 0) {
      fetchStores()
    }
  }, [fetchStores, stores.length])

  const buyStore = (storeId: number) => {
    const store = stores.find((store) => store.id === storeId)
    if (store && cats >= store.price) {
      updateCats(cats - store.price)

      setCatsPerSecond(catsPerSecond + store.catsPerSecond)

      const updatedStores = stores.map((s) =>
        s.id === storeId
          ? { ...s, price: Math.ceil(s.price * s.multiplier) }
          : s
      )
      setStores(updatedStores)
    }
  }

  return (
    <section>
      <h2>Store</h2>
      <ul>
        {stores.length > 0 ? (
          stores.map((adquisition) => (
            <li key={adquisition.id}>
              <Tooltip content={`Cats per second ${adquisition.catsPerSecond}`}>
                <Button
                  isDisabled={cats < adquisition.price}
                  onClick={() => buyStore(adquisition.id)}
                >
                  {adquisition.name} | {adquisition.price}
                </Button>
              </Tooltip>
            </li>
          ))
        ) : (
          <li>Loading stores...</li>
        )}
      </ul>
    </section>
  )
}
