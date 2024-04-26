import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const CONSIDER_STOP_SCROLL_TIME = 100

interface Props { }

const Header: FC<Props> = () => {
  const [isHeaderShow, setIsHeaderShow] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout
    const onScroll = () => {
      setIsHeaderShow(false)
      clearTimeout(timer)
      timer = setTimeout(() => {
        setIsHeaderShow(true)
      }, CONSIDER_STOP_SCROLL_TIME)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={twMerge(
        isHeaderShow ? 'mt-0 scale-y-100' : '-mt-10 scale-y-0',
        'fixed z-10 top-0 flex justify-between px-5 md:px-10 w-screen bg-white bg-opacity-75 shadow overflow-hidden transition-all'
      )}>
        <h1 className='my-2 text-lg'>Jedi Software</h1>

        <nav className='flex'>
          <Link href='/' className='flex justify-center items-center px-2'>Home</Link>
          <Link href='/find-the-cheese' className='flex justify-center items-center px-2'>Find the cheese</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
