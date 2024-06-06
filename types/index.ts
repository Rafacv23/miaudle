import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface Store {
  id: number
  name: string
  icon: string
  price: number
  catsPerSecond: number
  requiredCats: number
  quantity: number
  description: string
  multiplier: number
  existencies?: number
}

export interface Upgrade {
  id: number
  name: string
  icon: string
  price: number
  description: string
  requiredCats: number
  type: string
  storeId?: number
  value: number
}

export interface State {
  playing: boolean
  cats: number
  catsPerSecond: number
  clickPower: number
  setCatsPerSecond: (newCPS: number) => void
  setClickPower: (newClickPower: number) => void
  upgrades: Upgrade[]
  stores: Store[]
  fetchUpgrades: () => void
  fetchStores: () => void
  setStores: (newStores: Store[]) => void
  setUpgrades: (newUpgrades: Upgrade[]) => void
  increaseCats: () => void
  removeAllCats: () => void
  updateCats: (newCats: number) => void
  setPlaying: (value: boolean) => void
  reset: () => void
}
