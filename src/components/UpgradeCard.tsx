import { Upgrade } from "@/lib/types"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useMiaudleStore } from "@/lib/miaudleStore"

interface UpgradeCardProps {
  upgrade: Upgrade
  timesBought: number
  newCost: number
}

export default function UpgradeCard({
  upgrade,
  timesBought,
  newCost,
}: UpgradeCardProps) {
  const { totalCats, buyUpgrade } = useMiaudleStore()

  const canBuy = totalCats >= newCost

  return (
    <div className="relative h-48 w-48">
      <div className="absolute top-0 flex w-full justify-center">
        <div
          className={
            canBuy
              ? "left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-green-300 to-green-500 transition-all duration-1000"
              : "left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-red-300 to-red-500 transition-all duration-1000"
          }
        />
      </div>
      <div className="flex h-full items-center justify-center rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black px-3 py-2">
        <Tooltip key={upgrade.name}>
          <TooltipTrigger>
            <li
              onClick={() => buyUpgrade(upgrade.id)}
              className={canBuy ? "cursor-pointer" : "cursor-not-allowed"}
            >
              <h3>{upgrade.name}</h3>
              <p>Times bought: {timesBought}</p>
              <p>Cost: {newCost}</p>
              <TooltipContent>
                <p>{upgrade.description}</p>
              </TooltipContent>
            </li>
          </TooltipTrigger>
        </Tooltip>
      </div>
    </div>
  )
}
