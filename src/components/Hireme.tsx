import React from 'react'
import imageBunkerDev from '../../public/images/bunkerdev-png.png'
import Image from 'next/image'
const Hireme = () => {
  return (
    <div className='fixed right-4 bottom-8 flex items-center justify-center overflow-hidden'>
      <div className='relative w-28 h-auto flex items-center justify-center md:w-20 md:h-20'>
        <Image src={imageBunkerDev} alt='jose' className=' animate-spin-slow'/>
      </div>
    </div>
  )
}

export default Hireme