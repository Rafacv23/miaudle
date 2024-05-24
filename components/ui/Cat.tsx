"use client"

import React from "react"
import { Card, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import { useStore } from "@/lib/CatsStorage"

export default function Cat() {
  const cats = useStore((state) => state.cats)
  const increaseCats = useStore((state) => state.increaseCats)

  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <header>
        <button>Settings</button>
        <button>About</button>
      </header>
      <Image
        alt="Woman listening to music"
        className="object-cover"
        src="/cat.png"
        width={300}
        isZoomed
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Cats per second: {cats}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={increaseCats}
        >
          Collect
        </Button>
      </CardFooter>
    </Card>
  )
}
