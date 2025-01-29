import upgrades from "@/lib/data/upgrades.json"
import { Upgrade } from "@/lib/types"

export function getAllUpgrades(): Upgrade[] {
  return upgrades
}
