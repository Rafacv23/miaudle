import Passives from "@/components/Passives"
import Play from "@/components/Play"
import { Dock } from "@/components/ui/dock"
import Upgrades from "@/components/Upgrades"

export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-4">
      <div className="col-span-2 row-span-4">
        <Passives />
      </div>
      <div className="col-span-2 row-span-4 col-start-3">
        <Play />
      </div>
      <div className="col-span-2 row-span-4 col-start-5">
        <Upgrades />
      </div>
      <div className="col-span-6 row-start-5">
        <Dock>esto es un dock</Dock>
      </div>
    </div>
  )
}
