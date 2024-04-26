import React, { FC, useEffect, useState } from 'react'
import type { GetStaticProps } from 'next'
import { request } from '@/utils/request'
import { twMerge } from 'tailwind-merge'
import { FaCheese } from 'react-icons/fa'
import { LuRat } from 'react-icons/lu'

const BLOCK_WIDTH = 25

const BasicBlock: FC<{
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}> = ({ className = '', style = {}, children }) => {
  return (
    <div
      className={twMerge(className, 'flex justify-center items-center')}
      style={Object.assign({
        width: `${BLOCK_WIDTH}px`,
        height: `${BLOCK_WIDTH}px`
      }, style)}
    >
      {children}
    </div>
  )
}

const Wall: FC = () => {
  return (
    <BasicBlock className='bg-green-800' />
  )
}

const Path: FC = () => {
  return (
    <BasicBlock className='bg-lime-50' />
  )
}

interface Coordinate {
  x: number
  y: number
}

const Rate: FC<{ coordinate: Coordinate }> = ({ coordinate }) => {
  return (
    <BasicBlock className='absolute' style={{
      left: coordinate.x * BLOCK_WIDTH,
      top: coordinate.y * BLOCK_WIDTH
    }}>
      <LuRat />
    </BasicBlock>
  )
}

const Cheese: FC<{ coordinate: Coordinate }> = ({ coordinate }) => {
  return (
    <BasicBlock className='absolute' style={{
      left: coordinate.x * BLOCK_WIDTH,
      top: coordinate.y * BLOCK_WIDTH
    }}>
      <FaCheese />
    </BasicBlock>
  )
}

const blockEnum = {
  wall: Wall,
  path: Path,
  start: Path,
  end: Path
}

type MapData = (keyof typeof blockEnum)[][]

export const getStaticProps = (async (context) => {
  const { data: maps } = await request.get('/api/maze')
    .catch(() => {
      // record error log if needed.
      return { data: [] }
    })

  return { props: { maps } }
}) satisfies GetStaticProps<{
  maps: MapData
}>

const Map: FC<{
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

const FindTheCheese: FC<{
  maps: MapData[]
}> = ({ maps }) => {
  console.log(maps)

  return (
    <>
      <h1>Find the cheese</h1>
      <p>Click &apos;Start&apos; to see how the mouse find the cheese by using DFS!</p>
      <div className='mt-5 space-y-5'>
        {maps.map((map, index) => <Map data={map} key={index} />)}
      </div>
    </>
  )
}

export default FindTheCheese
