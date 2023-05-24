import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg px-20 text-black
    '>
      <div className='py-8 flex items-center justify-between'>
      <span className=''>{new Date().getFullYear()}&copy; All Rights Reserved</span>
      <div className='flex items-center'>
       Build  With <span className='text-primary text-2xl px-1'>&#9825;</span>
       by &nbsp;<a href={'https://www.youtube.com/@bunkerdev'} target={'_blank'}className='underline'>@bunkerdev</a>
      </div>
      
      <Link href={'/'} className=' '>Say Hello</Link>
      </div>
      
      
    </footer>
  )
}

export default Footer