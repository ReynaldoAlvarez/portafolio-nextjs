'use client';
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import profileVidal from '../../public/images/profile/vidalprofile.png'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Footer from '@/components/Footer';
import Hireme from '@/components/Hireme';

export default function Home() {
  return (<>
  <NavBar />
  <main className="flex items-center text-dark w-full min-h-screen">
    <div className=' w-1/2 flex item-center justify-between'>
      <Image src={profileVidal} width={600}
      height={600} alt="Picture of the author" />
    </div>
    <div className='w-1/2 flex flex-col items-center self-center'>
      
      <AnimatedText text={'Turning Vision Into Reality With Code And Desig'} 
      className={'!text-6xl !text-left'} />
      <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
      <div className='flex items-center self-start mt-2'>
        <Link href='/dummy.pdf' target='_blank' className=' flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
        download={true}
        >Resume<LinkArrow className='ml-1 w-6'/>
        </Link>
        <Link href='mailto:vidal.r.a.777@gmail.com' target='_blank' className='ml-4 text-lg font-medium capitalize underline'>Contact</Link>
      </div>
    </div>
  </main>
  <Hireme />
  <Footer />
  </>
  )
}
