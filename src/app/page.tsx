export default function Home() {
  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-4">
      <div className="col-span-2 row-span-4">1</div>
      <div className="col-span-2 row-span-4 col-start-3">
        <img src="cat.png" alt="cat" />
      </div>
      <div className="col-span-2 row-span-4 col-start-5">3</div>
      <div className="col-span-6 row-start-5">4</div>
    </div>
  )
}
