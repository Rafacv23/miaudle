import { getAllPassives } from "@/lib/passives"

export default function Passives() {
  return (
    <div>
      <h2>Passives</h2>
      <ul>
        {getAllPassives().map((passive) => (
          <li key={passive.name}>{passive.name}</li>
        ))}
      </ul>
    </div>
  )
}
