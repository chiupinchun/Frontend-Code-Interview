import { FC, useCallback, useEffect, useRef, useState } from "react"
import { Cheese, Path, Rate, Wall } from "./blocks"
import { Coordinate, MapData, MapTypes } from "../(types)"
import { findPath } from "../(utils)/findPath"

const blockEnum = {
  wall: Wall,
  path: Path,
  start: Path,
  end: Path
}

export const Map: FC<{
  data: MapData
}> = ({ data }) => {
  const [rawRateCoordinate, setRawRateCoordinate] = useState({ x: 0, y: 0 })
  const [rateCoordinate, setRateCoordinate] = useState({ x: 0, y: 0 })
  const [cheeseCoordinate, setCheeseCoordinate] = useState({ x: 0, y: 0 })

  const [rateRoute, setRatePath] = useState<Coordinate[]>([])

  useEffect(() => {
    data.forEach((row, y) => {
      row.forEach((item, x) => {
        switch (item) {
          case 'start':
            setRawRateCoordinate({ x, y })
            setRateCoordinate({ x, y })
            break
          case 'end':
            setCheeseCoordinate({ x, y })
            break
        }
      })
    })
  }, [data])

  const processId = useRef(0)
  const start = useCallback(() => {
    const currentProcess = processId.current
    findPath(
      rawRateCoordinate,
      cheeseCoordinate,
      data,
      async (path) => {
        if (currentProcess !== processId.current) { return }

        const rateCoordinate = path[path.length - 1]
        setRateCoordinate(rateCoordinate)

        setRatePath(path)

        await new Promise<void>(resolve => setTimeout(resolve, 100))
      }
    )
  }, [rawRateCoordinate, cheeseCoordinate, data])

  const reset = useCallback(() => {
    setRateCoordinate(rawRateCoordinate)
    setRatePath([])
    processId.current++
  }, [rawRateCoordinate])

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
      <button onClick={rateRoute.length ? reset : start} className="block mt-3 w-full rounded bg-amber-400">
        {rateRoute.length ? 'Reset' : 'Start'}
      </button>
    </div>
  )
}