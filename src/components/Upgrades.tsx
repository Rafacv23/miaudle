import { getAllUpgrades } from "@/lib/upgrades"

export default function Upgrades() {
  const upgrades = getAllUpgrades()
  return (
    <div>
      <h2>Upgrades</h2>
      <ul>
        {upgrades.map((upgrade) => (
          <li key={upgrade.name}>{upgrade.name}</li>
        ))}
      </ul>
    </div>
  )
}
