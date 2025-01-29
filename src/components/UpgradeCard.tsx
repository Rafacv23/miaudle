import { Upgrade } from "@/lib/types"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useMiaudleStore } from "@/lib/miaudleStore"
import { InteractiveHoverButton } from "./ui/interactive-hover-button"

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
    <li key={upgrade.name}>
      <Tooltip>
        <TooltipTrigger>
          <InteractiveHoverButton
            canBuy={canBuy}
            cost={newCost}
            className={canBuy ? "cursor-pointer" : "cursor-not-allowed"}
            onClick={() => buyUpgrade(upgrade.id)}
          >
            <h3>{upgrade.name}</h3>
            <p>Times bought: {timesBought}</p>
            <p>Cost: {newCost}</p>
            <TooltipContent>
              <p>{upgrade.description}</p>
            </TooltipContent>
          </InteractiveHoverButton>
        </TooltipTrigger>
      </Tooltip>
    </li>
  )
}
