'use client';
import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import vidalImage from '../../../public/images/vidal.png'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
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
    <main className='flex w-full flex-col items-center justify-center text-dark dark:text-light'>
      <AnimatedText text="Passion Fuels Purpose!" className=' mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
      <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
        <p className='opacity-60 '>Biographi</p>
          <h1 className="text-3xl">Hello! I&apos;m Vidal Alvarez</h1>
          <h1 className="text-3.5xl mb-5">Software Engineer</h1>
          <p className={`italic opacity-90 mb-12 leading-1 textbase`}>I think that each application that a client requires is based on a need, this need is a contribution to the development of society, and we make it happen with software development.</p>
          <p className={`w-10/12 opacity-75 h-[300px] overflow-x-auto`}> As a software engineer and the experience acquired in technology companies and my own projects that I develop, allowed me to develop skills in different areas. I have the ability to lead teams to develop applications based on customer needs, using architectures and development methodologies, adapting the most convenient language for the requested requirements, I have the ability to master different languages, However, my specialty is the use of JS with Typescript and all its frameworks, as well as Dart with Flutter.</p>
          <p className={`w-10/12 opacity-75 h-[300px] overflow-x-auto`}>I have the ability to lead teams to develop applications based on customer needs, using architectures and development methodologies, adapting the most convenient language for the requested requirements, I have the ability to master different languages, However, my specialty is the use of JS with Typescript and all its frameworks, as well as Dart with Flutter.</p>
        </div>

        <div className='col-span-3  h-max bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
          <div className=" top-0 -right-3 -z-10 w-[102%] h-[103%]">
            <Image src={vidalImage} alt='vidal' className='w-full h-auto rounded-2xl' 
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div> 
        </div>

        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
          <div className='flex flex-col items-end justify-center xl:items-center '>
            <span className='inline-block text-7xl font-bold text-dark md:text-6xl sm:text-5xl xs:text-4xl'>
              <AnimateNumbers value={50}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base'>
            satisfied clients
            </h2>
            
          </div>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimateNumbers value={40}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base'>
            projects complited
            </h2>
            
          </div>
          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimateNumbers value={10}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base'>
            years experience
            </h2>
            
          </div>
        </div>
      </div>
      <Skills />
      <Experience />

    </main>

    </>
  )
}

export default about