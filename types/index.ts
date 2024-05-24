import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface Store {
  id: number
  name: string
  icon: string
  price: number
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
}
