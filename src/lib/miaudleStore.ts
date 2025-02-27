import { create } from "zustand"
import upgrades from "@/lib/data/upgrades.json"
import passives from "@/lib/data/passives.json"

type CatsStore = {
  totalCats: number
  catsPerSecond: number
  clicks: number
  ownedUpgrades: Record<string, number>
  ownedPassives: Record<string, number>
  unlockedUpgrades: string[]
  unlockedPassives: string[]

  incrementCats: (amount: number) => void
  incrementClicks: () => void
  buyUpgrade: (upgradeId: string) => void
  buyPassive: (passiveId: string) => void
  updateCatsPerSecond: () => void
  checkUnlockedUpgrades: () => void
  checkUnlockedPassives: () => void
  increasePassiveIncome: () => void
}

export const useMiaudleStore = create<CatsStore>((set, get) => ({
  totalCats: 0,
  catsPerSecond: 0,
  clicks: 0,
  ownedUpgrades: {},
  ownedPassives: {},
  unlockedUpgrades: [],
  unlockedPassives: [],

  incrementCats: (amount) =>
    set((state) => ({
      totalCats: state.totalCats + amount,
      clicks: state.clicks + 1,
    })),

  incrementClicks: () => {
    set((state) => {
      const clickBonus = Object.keys(state.ownedUpgrades).reduce(
        (bonus, id) => {
          return bonus + (state.ownedUpgrades[id] || 0)
        },
        1
      )

      return {
        clicks: state.clicks + 1,
        totalCats: state.totalCats + clickBonus,
      }
    })
  },

  buyUpgrade: (upgradeId) => {
    set((state) => {
      const upgrade = upgrades.find((u) => u.id === upgradeId)
      if (!upgrade) return state

      const timesBought = state.ownedUpgrades[upgradeId] || 0
      const newCost = Math.floor(upgrade.cost * Math.pow(1.15, timesBought))

      if (state.totalCats >= newCost) {
        const newOwnedUpgrades = { ...state.ownedUpgrades }
        newOwnedUpgrades[upgradeId] = timesBought + 1

        return {
          totalCats: state.totalCats - newCost,
          ownedUpgrades: newOwnedUpgrades,
        }
      }
      return state
    })

    get().updateCatsPerSecond()
    get().checkUnlockedUpgrades()
    get().checkUnlockedPassives()
  },

  buyPassive: (passiveId) => {
    set((state) => {
      const passive = passives.find((p) => p.id === passiveId)
      if (!passive) return state

      if (state.totalCats >= passive.cost) {
        const newOwnedPassives = { ...state.ownedPassives }
        return {
          totalCats: state.totalCats - passive.cost,
          ownedPassives: newOwnedPassives,
        }
      }
      return state
    })

    get().updateCatsPerSecond()
    get().checkUnlockedUpgrades()
    get().checkUnlockedPassives()
  },

  updateCatsPerSecond: () => {
    set((state) => {
      const newCPS = Object.keys(state.ownedUpgrades).reduce((sum, id) => {
        const upgrade = upgrades.find((u) => u.id === id)
        if (upgrade) {
          sum += (state.ownedUpgrades[id] || 0) * upgrade.catsPerSecond
        }
        return sum
      }, 0)

      return { catsPerSecond: newCPS }
    })
  },

  checkUnlockedUpgrades: () => {
    set((state) => {
      const unlocked = upgrades
        .filter((upgrade) => {
          if (state.unlockedUpgrades.includes(upgrade.id)) return false

          const conditions = upgrade.unlockCondition
          if (conditions.totalCats && state.totalCats < conditions.totalCats)
            return false
          if (
            conditions.catsPerSecond &&
            state.catsPerSecond < conditions.catsPerSecond
          )
            return false
          if (conditions.clicks && state.clicks < conditions.clicks)
            return false
          if (
            conditions.upgradePurchases &&
            Object.entries(conditions.upgradePurchases).some(
              ([id, count]) => (state.ownedUpgrades[id] || 0) < count
            )
          )
            return false

          return true
        })

        .map((upgrade) => upgrade.id)

      return { unlockedUpgrades: [...state.unlockedUpgrades, ...unlocked] }
    })
  },

  checkUnlockedPassives: () => {
    set((state) => {
      const unlocked = passives
        .filter((passive) => {
          if (state.unlockedPassives.includes(passive.id)) return false

          const conditions = passive.unlockCondition
          if (conditions.totalCats && state.totalCats < conditions.totalCats)
            return false
          if (
            conditions.catsPerSecond &&
            state.catsPerSecond < conditions.catsPerSecond
          )
            return false
          if (conditions.clicks && state.clicks < conditions.clicks)
            return false
          if (
            conditions.upgradePurchases &&
            Object.entries(conditions.upgradePurchases).some(
              ([id, count]) => (state.ownedUpgrades[id] || 0) < count
            )
          )
            return false

          return true
        })

        .map((passive) => passive.id)

      return { unlockedPassives: [...state.unlockedPassives, ...unlocked] }
    })
  },

  increasePassiveIncome: () => {
    set((state) => ({ totalCats: state.totalCats + state.catsPerSecond }))
  },
}))
