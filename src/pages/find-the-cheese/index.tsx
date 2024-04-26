import React, { FC } from 'react'
import type { GetStaticProps } from 'next'
import { request } from '@/utils/request'
import { Map } from './(components)/map'
import { MapData } from './(types)'

export const getStaticProps = (async () => {
  const { data: maps } = await request.get('/api/maze')
    .catch(() => {
      // record error log if needed.
      return { data: [] }
    })

  return { props: { maps } }
}) satisfies GetStaticProps<{
  maps: MapData
}>

const FindTheCheese: FC<{
  maps: MapData[]
}> = ({ maps }) => {
  console.log(maps)

  return (
    <>
      <h1>Find the cheese</h1>
      <p>Click &apos;Start&apos; to see how the mouse find the cheese by using DFS!</p>
      <div className='mt-5 space-y-5'>
        {maps.map((map, index) => (
          <React.Fragment key={index}>
            {index > 0 ? <hr /> : null}
            <Map data={map} />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default FindTheCheese
