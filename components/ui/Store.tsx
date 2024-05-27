"use client"

import React, { useEffect } from "react"
import { useStore } from "@/lib/CatsStorage"
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"

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
          ? {
              ...s,
              price: Math.ceil(s.price * s.multiplier),
              quantity: s.quantity + 1,
            }
          : s
      )
      setStores(updatedStores)
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">STORE</h2>
      <ul role="list">
        {stores.length > 0 &&
          stores.map((adquisition) => (
            <>
              <li
                key={adquisition.id}
                className="flex justify-between items-center py-5"
              >
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={adquisition.icon}
                    alt={adquisition.name}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold leading-6 text-white">
                      {adquisition.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-300">
                      {adquisition.description}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-white">
                    {adquisition.price} price
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-300">
                    {adquisition.catsPerSecond} Cats per Second
                  </p>
                </div>
                <Button
                  color="primary"
                  className="ml-2"
                  onClick={() => buyStore(adquisition.id)}
                  isDisabled={cats < adquisition.price}
                >
                  Buy
                </Button>
              </li>
              <Divider orientation="horizontal" />
            </>
          ))}
      </ul>
    </section>
  )
}
