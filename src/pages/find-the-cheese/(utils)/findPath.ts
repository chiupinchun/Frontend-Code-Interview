import { Coordinate, MapData } from "../(types)";

export const findPath = async (
  start: Coordinate,
  goal: Coordinate,
  map: MapData,
  onStep?: (path: Coordinate[]) => Promise<void>
) => {
  const path: Coordinate[] = []

  const checkPath = async (
    { x, y }: Coordinate,
  ) => {
    const isWall = map[y][x] === 'wall'
    const isChecked = path.some(coordinate => coordinate.x === x && coordinate.y === y)
    if (isChecked || isWall) { return false }

    path.push({ x, y })
    if (onStep) {
      await onStep([...path])
    }

    if (x === goal.x && y === goal.y) {
      return true
    }

    if (x > 0) {
      const isOnLeftSide = await checkPath({ x: x - 1, y })
      if (isOnLeftSide) { return true }
    }

    if (x < map[y].length - 1) {
      const isOnRightSide = await checkPath({ x: x + 1, y })
      if (isOnRightSide) { return true }
    }

    if (y > 0) {
      const isOnTopSide = await checkPath({ x, y: y - 1 })
      if (isOnTopSide) { return true }
    }

    if (y < map.length - 1) {
      const isOnBottomSide = await checkPath({ x, y: y + 1 })
      if (isOnBottomSide) { return true }
    }

    path.pop()
    if (onStep) {
      await onStep([...path])
    }

    return false
  }

  await checkPath(start)
}