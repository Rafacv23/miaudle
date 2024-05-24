"use client"

import { useStore } from "@/lib/CatsStorage"
import Play from "../components/ui/Play"
import Start from "@/components/ui/Start"

export default function Home() {
  let playing = useStore((state) => state.playing)
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        {playing ? <Play /> : <Start />}
      </div>
    </section>
  )
}
