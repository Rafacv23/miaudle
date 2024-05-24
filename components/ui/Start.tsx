import { useStore } from "@/lib/CatsStorage"
import React from "react"

export default function Start() {
  const setPlaying = useStore((state) => state.setPlaying)
  const handleClick = () => {
    setPlaying(true)
  }
  return (
    <section>
      <h2>Hello! Welcome to Miaudle</h2>
      <button onClick={handleClick}>Play</button>
    </section>
  )
}
