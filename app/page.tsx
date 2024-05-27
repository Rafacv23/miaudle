"use client"

import { useStore } from "@/lib/CatsStorage"
import Play from "../components/ui/Play"
import Start from "@/components/ui/Start"

export default function Home() {
  let playing = useStore((state) => state.playing)
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-8 md:py-10">
      <div className=" max-w-full text-center">
        {playing ? <Play /> : <Start />}
      </div>
    </section>
  )
}
