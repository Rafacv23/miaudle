import { getAllPassives } from "@/lib/passives"

export default function Passives() {
  return (
    <div>
      <h2>Passives</h2>
      <ul>
        {getAllPassives().map((passive) => (
          <li key={passive.name}>
            <h3>{passive.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}
