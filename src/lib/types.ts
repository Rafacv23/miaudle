type UnlockCondition = {
  totalCats?: number
  catsPerSecond?: number
  clicks?: number
  upgradePurchases?: Record<string, number>
}

export type Upgrade = {
  id: string
  name: string
  description: string
  img: string
  cost: number
  catsPerSecond: number
  unlockCondition: UnlockCondition
}

export type Passive = {
  id: string
  name: string
  description: string
  image: string
  cost: number
  effect: { upgrades: Record<string, number> }
  unlockCondition: UnlockCondition
}

export type PermanentUpgrade = Omit<Upgrade, "unlockCondition">
