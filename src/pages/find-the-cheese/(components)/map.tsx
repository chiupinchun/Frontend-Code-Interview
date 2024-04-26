import { FC, useEffect, useState } from "react"
import { Cheese, Path, Rate, Wall } from "./blocks"

const blockEnum = {
  wall: Wall,
  path: Path,
  start: Path,
  end: Path
}

export type MapData = (keyof typeof blockEnum)[][]

export const Map: FC<{
  data: MapData
}> = ({ data }) => {
  const [rateCoordinate, setRateCoordinate] = useState({ x: 0, y: 0 })
  const [cheeseCoordinate, setCheeseCoordinate] = useState({ x: 0, y: 0 })

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

  return (
    <div className='relative mx-auto w-fit'>
      {
        data.map((row, index) => (
          <div key={index} className='flex'>
            {row.map((type, index) => {
              const Block = blockEnum[type]
              return <Block key={index}></Block>
            })}
          </div>
        ))
      }
      <Rate coordinate={rateCoordinate} />
      <Cheese coordinate={cheeseCoordinate} />
    </div>
  )
}