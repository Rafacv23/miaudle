import { getAllPassives } from "@/lib/passives"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Passives() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Passives</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {getAllPassives().map((passive) => (
            <li key={passive.name}>
              <h3>{passive.name}</h3>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
