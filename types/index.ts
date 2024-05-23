import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface CatStore {
  cats: number
  increasePopulation: () => void
  removeAllCats: () => void
  updateCats: (newCats: number) => void
}
