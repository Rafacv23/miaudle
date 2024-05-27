"use client"

import React from "react"
import { Card, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import useAutoIncrementCats, { useStore } from "@/lib/CatsStorage"
export default function Cat() {
  useAutoIncrementCats()
  const cats = useStore((state) => state.cats)
  const catsPerSecond = useStore((state) => state.catsPerSecond)
  const increaseCats = useStore((state) => state.increaseCats)

  return (
    <Card isFooterBlurred radius="lg" className="border-none bg-transparent">
      <header className="flex justify-between">
        <Button>Settings</Button>
        <Button>About</Button>
      </header>
      <Image
        alt="Cat"
        className="object-cover cursor-pointer"
        src="/cat.png"
        width={300}
        isZoomed
        onClick={increaseCats}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">
          Total cats: {cats} | Cats per second: {catsPerSecond}
        </p>
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
