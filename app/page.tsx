import Play from "../components/ui/Play"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <Play />
      </div>
    </section>
  )
}
