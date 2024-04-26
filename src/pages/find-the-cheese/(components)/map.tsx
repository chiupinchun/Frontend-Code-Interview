import { FC, useEffect, useState } from "react"
import { Cheese, Path, Rate, Wall } from "./blocks"
import { Coordinate, MapData, MapTypes } from "../(types)"

const blockEnum = {
  wall: Wall,
  path: Path,
  start: Path,
  end: Path
}

export const Map: FC<{
  data: MapData
}> = ({ data }) => {
  const [rateCoordinate, setRateCoordinate] = useState({ x: 0, y: 0 })
  const [cheeseCoordinate, setCheeseCoordinate] = useState({ x: 0, y: 0 })

  const [rateRoute, setRateRoute] = useState<Coordinate[]>([])

  useEffect(() => {
    data.forEach((row, y) => {
      row.forEach((item, x) => {
        switch (item) {
          case 'start':
            setRateCoordinate({ x, y })
            break
          case 'end':
            setCheeseCoordinate({ x, y })
            break
        }
      })
    })
  }, [data])

  const start = () => {

  }

  return (
    <div className='relative mx-auto w-fit'>
      {
        data.map((row, y) => (
          <div key={y} className='flex'>
            {row.map((type, x) => {
              const Block = blockEnum[type]
              return <Block
                key={x}
                active={rateRoute.some(
                  coordinate => coordinate.x === x && coordinate.y === y
                )}
              />
            })}
          </div>
        ))
      }
      <Rate coordinate={rateCoordinate} />
      <Cheese coordinate={cheeseCoordinate} />
      <button onClick={start} className="block mt-3 w-full rounded bg-amber-400">Start</button>
    </div>
  )
}