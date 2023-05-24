import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import avatarVidal from '../../public/images/vidal.png'
const Motionlink = motion(Link);

const Logo = () => {
  return (
    <div
    className=' flex items-center justify-center mt-2'
    >
      <Motionlink href={'/'} 
      className='w-16 h-16 bg-dark text-white flex items-center justify-center rounded-full text-2xl font-bold' 
      whileHover={{scale
      :1.5,
      backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
      transition:{duration:1.5},
      }}>
       <Image
      src={avatarVidal}
      width={100}
      height={100}
      className='rounded-full'
      alt="Picture of the author"
    />
        </Motionlink>
    </div>
  )
}

export default Logo