import { Passive } from "@/lib/types"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useMiaudleStore } from "@/lib/miaudleStore"
import { InteractiveHoverButton } from "./ui/interactive-hover-button"

interface UpgradeCardProps {
  passive: Passive
}

export default function PassiveCard({ passive }: UpgradeCardProps) {
  const { totalCats, buyPassive } = useMiaudleStore()

  const canBuy = totalCats >= passive.cost

  return (
    <li key={passive.id}>
      <Tooltip>
        <TooltipTrigger asChild>
          <InteractiveHoverButton
            canBuy={canBuy}
            cost={passive.cost}
            className={canBuy ? "cursor-pointer" : "cursor-not-allowed"}
            onClick={() => buyPassive(passive.id)}
          >
            <h3>{passive.name}</h3>
            <p>Cost: {passive.cost}</p>
            <TooltipContent>
              <p>{passive.description}</p>
            </TooltipContent>
          </InteractiveHoverButton>
        </TooltipTrigger>
      </Tooltip>
    </li>
  )
}
