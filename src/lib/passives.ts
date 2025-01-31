import passives from "@/lib/data/passives.json"
import { Passive } from "@/lib/types"

export function getAllPassives(): Passive[] {
  return passives
}
