import Passives from "@/components/Passives"
import Play from "@/components/Play"
import Upgrades from "@/components/Upgrades"

export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-4">
      <div className="col-span-2 row-span-4">
        <Passives />
      </div>
      <div className="col-span-2 row-span-4 col-start-3">
        <Play />
      </div>
      <div className="col-span-2 row-span-4 col-start-5">
        <Upgrades />
      </div>
    </div>
  )
}
