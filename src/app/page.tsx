import Passives from "@/components/Passives"
import Play from "@/components/Play"
import { ThemeSwitch } from "@/components/ThemeSwitch"
import { buttonVariants } from "@/components/ui/button"
import { Dock } from "@/components/ui/dock"
import Upgrades from "@/components/Upgrades"
import { GITHUB_REPO_URL, LINKEDIN_URL, PORTFOLIO_URL } from "@/lib/constants"
import { Github, Info, Linkedin, User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const dockData = [
    {
      name: "Github",
      icon: Github,
      url: GITHUB_REPO_URL,
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      url: LINKEDIN_URL,
    },
    {
      name: "Rafa Canosa Portfolio",
      icon: User,
      url: PORTFOLIO_URL,
    },
    {
      name: "About",
      icon: Info,
      url: "/about",
    },
  ]

  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-4">
      <div className="col-span-2 row-span-4">
        <Passives />
      </div>
      <div className="col-span-2 row-span-4 col-start-3">
        <Play />
      </div>
      <div className="col-span-2 row-span-4 col-start-5">
        <Upgrades />
      </div>
      <div className="col-span-6 row-start-5">
        <Dock>
          {dockData.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <item.icon size={24} />
            </Link>
          ))}
          <ThemeSwitch />
        </Dock>
      </div>
    </div>
  )
}
