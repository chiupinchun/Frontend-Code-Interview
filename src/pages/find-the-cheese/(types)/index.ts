export interface Coordinate {
  x: number
  y: number
}

export type MapTypes = 'wall' | 'path' | 'start' | 'end'

export type MapData = MapTypes[][]
