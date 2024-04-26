import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const Block: FC<{
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
    <Block className='bg-green-800' />
  )
}

const Path: FC = () => {
  return (
    <Block className='bg-lime-50' />
  )
}

// TODO: what is RuRat & FaCheese?
const Rate: FC = () => {
  return (
    <Block>M</Block>
  )
}

const Cheese: FC = () => {
  return (
    <Block>C</Block>
  )
}

interface Props { }

const Page: FC<Props> = () => {
  return (
    <>
      <h1>Find the cheese</h1>
      <p>Click &apos;Start&apos; to see how the mouse find the cheese by using DFS!</p>
      <Wall />
    </>
  )
}

export default Page
