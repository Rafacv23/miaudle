import type { Metadata } from "next"
import { Josefin_Sans, Raleway, Taviraj } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { Dock } from "@/components/ui/dock"
import Link from "next/link"
import { ThemeSwitch } from "@/components/theme/ThemeSwitch"
import { buttonVariants } from "@/components/ui/button"
import { GITHUB_REPO_URL, LINKEDIN_URL, PORTFOLIO_URL } from "@/lib/constants"
import { Github, Home, Info, Linkedin, User } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})

const taviraj = Taviraj({
  variable: "--font-taviraj",
  subsets: ["latin"],
  weight: ["400"],
})

const dockData = {
  contact: [
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
  ],
  navigation: [
    {
      name: "Home",
      icon: Home,
      url: "/",
    },
    {
      name: "About",
      icon: Info,
      url: "/about",
    },
  ],
}

export const metadata: Metadata = {
  title: "Miaudle",
  description:
    "Miadle is a clicker game where you collect cats to produce more cats.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefinSans.variable} ${raleway.variable} ${taviraj.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Dock>
            {dockData.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                rel="noreferrer"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <item.icon size={24} />
              </Link>
            ))}
            <Separator orientation="vertical" className="h-full" />
            {dockData.contact.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                rel="noreferrer"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <item.icon size={24} />
              </Link>
            ))}
            <Separator orientation="vertical" className="h-full" />
            <ThemeSwitch />
          </Dock>
        </ThemeProvider>
      </body>
    </html>
  )
}
