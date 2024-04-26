import { FC } from "react"
import { twMerge } from "tailwind-merge"
import { LuRat } from "react-icons/lu"
import { FaCheese } from "react-icons/fa"
import { Coordinate } from "../(types)"

const BLOCK_WIDTH = 25

export const BasicBlock: FC<{
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

export const Wall: FC = () => {
  return (
    <BasicBlock className='bg-green-800' />
  )
}

export const Path: FC<{
  active: boolean
}> = ({ active }) => {
  return (
    <BasicBlock className={twMerge(active ? 'bg-amber-200' : 'bg-lime-50')} />
  )
}

export const Rate: FC<{ coordinate: Coordinate }> = ({ coordinate }) => {
  return (
    <BasicBlock className='absolute' style={{
      left: coordinate.x * BLOCK_WIDTH,
      top: coordinate.y * BLOCK_WIDTH
    }}>
      <LuRat />
    </BasicBlock>
  )
}

export const Cheese: FC<{ coordinate: Coordinate }> = ({ coordinate }) => {
  return (
    <BasicBlock className='absolute' style={{
      left: coordinate.x * BLOCK_WIDTH,
      top: coordinate.y * BLOCK_WIDTH
    }}>
      <FaCheese />
    </BasicBlock>
  )
}