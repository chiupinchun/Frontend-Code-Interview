import React, { FC } from 'react'
import type { GetStaticProps } from 'next'
import { request } from '@/utils/request'
import { twMerge } from 'tailwind-merge'

const BasicBlock: FC<{
  className?: string
  children?: React.ReactNode
}> = ({ className = '', children }) => {
  return (
    <div className={twMerge('w-5 h-5', className)}>
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

// TODO: what is RuRat & FaCheese?
const Rate: FC = () => {
  return (
    <BasicBlock>M</BasicBlock>
  )
}

const Cheese: FC = () => {
  return (
    <BasicBlock>C</BasicBlock>
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
    .catch((err) => {
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

  return (
    <div className='flex flex-col items-center'>
      {
        data.map((row, index) => (
          <div key={index} className='flex'>
            {row.map((type, index) => {
              const Block = blockEnum[type]
              return <Block key={index} />
            })}
          </div>
        ))
      }
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
