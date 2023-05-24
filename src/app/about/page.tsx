'use client';
import AnimatedText from '@/components/AnimatedText';
import Footer from '@/components/Footer';
import Hireme from '@/components/Hireme';
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import vidalImage from '../../../public/images/vidal.png'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '../skills/page';
import Experience from '@/components/Experience';

 type Val={
  value:number;
}
const AnimateNumbers = (prop:Val)=>{
  console.log("number:",prop.value)
  const ref:any = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration:3000});
  const isInView = useInView(ref as any);

    useEffect(()=>{
      if(isInView){
        motionValue.set(prop.value)
      }
    }, [isInView, prop.value, motionValue])
  
    useEffect(()=>{
      springValue.on("change", (latest)=>{
       if(ref.current && latest.toFixed(0) <= prop.value ){
        ref.current.textContent = latest.toFixed(0);
       }
      })
    },[springValue, prop.value])
  return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
    <Head>
      <title>About Page | Vidal Alvarez</title>
      <meta name='description' content='any description'></meta>
    </Head>
    <NavBar />
    <main className='flex w-full flex-col items-center justify-center text-dark'>
      <AnimatedText text="Passion Fuels Purpose!" className=' mb-16'/>
      <div className='grid w-full grid-cols-8 gap-16'>
        <div className='col-span-3 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
            Biographi
          </h2>
          <p className=' font-medium'>
          Hi, I&apos;m Vidal Alvarez @bunkerdev, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user
          </p>  
<p className=' font-medium'>centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients visions to life.
</p>

<p className=' my-4 font-medium'>I believe that design is about more than just making things look pretty
</p>  
<p className=' font-medium'>it&apos;s about solving problems and 
creating intuitive, enjoyable experiences for users. 
</p> 

<p className=' font-medium'>Whether I&apos;m working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user
</p> 
<p className=' font-medium'>centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
</p>
        </div>

        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
          <div className='rounded-[2rem] bg-indigo-950 '>
            <Image src={vidalImage} alt='vidal' className='w-full h-auto rounded-2xl' />
          </div> 
        </div>

        <div className='col-span-2 flex flex-col items-end justify-between'>
          <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold text-dark'>
              <AnimateNumbers value={50}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>
            satisfied clients
            </h2>
            
          </div>
          <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
            <AnimateNumbers value={40}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>
            projects complited
            </h2>
            
          </div>
          <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
            <AnimateNumbers value={10}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75'>
            years experience
            </h2>
            
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Hireme />
    </main>
    
  <Footer />
    </>
  )
}

export default about