'use client';
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import profileVidal from '../../public/images/profile/vidalprofile.png'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Footer from '@/components/Footer';
import Hireme from '@/components/Hireme';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (<>
  <TransitionEffect />

  <main className="flex items-center text-dark w-full min-h-screen">
  <div className='flex item-center justify-between lg:flex-col'>
  <div className=' w-1/2 md:w-full lg:justify-center lg:items-center'>
      <Image src={profileVidal} alt="Picture of the author" 
      className='w-full h-auto lg:hidden md:inline-block md:w-full'
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </div>
    <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
      
      <AnimatedText text={'Software Engineer'} 
      className={'!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'} />
      <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>I create solutions to problems according to the needs of clients using software technologies, i am dedicated to turning ideas into innovative web and mobile applications. 
      Explore my latest projects and articles showcasing my expertise</p>
      <div className='flex items-center self-start mt-2 lg:self-center'>
        <Link href='/resumen-vidal-alvarez-2023.pdf' target='_blank' className=' flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
        download={true}
        >Resume<LinkArrow className='ml-1 w-6'/>
        </Link>
        <Link href='mailto:vidal.r.a.777@gmail.com' target='_blank' className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link>
      </div>
    </div>
  </div>
   
  </main>
  <Hireme />
  </>
  )
}
