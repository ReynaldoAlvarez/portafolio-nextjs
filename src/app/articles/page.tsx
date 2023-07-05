'use client';
import AnimatedText from '@/components/AnimatedText';

import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'

import coursenextjs13 from '../../../public/images/articles/Coursenextjs13.png'

import architectsoftware from '../../../public/images/articles/architectsoftware.png'
import softwaredevelopment from '../../../public/images/articles/softwaredevelopment.png'
import iapost from '../../../public/images/articles/iapost.png'
import scrum from '../../../public/images/articles/scrum.png'
import { motion, useMotionValue } from 'framer-motion';

type TArticle = {
  img:string | any;
  title:string;
  date?:string;
  link:string;
}
type TFArticle = {
  img:string | any;
  title:string;
  time:string;
  summary:string;
  link:string;
}
const FramerImage = motion(Image)
const MovingImage = ({title,img,link}: TArticle)=>{

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null) as any

  function handleMouse(event: any){
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event: any){
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }
  
  return(
    <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
     <h2 className=' capitalize font-semibold text-2xl hover:underline'>{title}</h2>
     <FramerImage style={{x:x, y:y}} initial={{opacity:0}} whileInView={{ opacity:1, transition:{duration:0.2}}} ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
    </Link>
  )
}

const Article = ({img, title, date, link} : TArticle)=>{
  return(
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
    className=' relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light  text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
     <MovingImage img={img} title=
     {title} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
}
const FeatureArticles = ({img, title, time,summary, link}: TFArticle)=>{
  return(
    <li className='col-span-1 w-full p-4 bg-light border border-solid rounded-2xl'>
      <Link href={link} target='_blank'
      className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'> 
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'> 
        <h2 className='capitalize text-2xl text-dark font-bold my-2 hover:underline
        xs:text-lg
        '>{title}</h2>
      </Link>
      <p className='text-sm mb-2 text-dark'>{summary}</p>
      <span className=' text-primary font-semibol'>{time}</span>
    </li>  
    )
}
const page = () => {
  return (
    <>
    <Head>
      <title>Articles</title>
      <meta name='description' content='any description'></meta>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
      <div className='p-20'>
      <AnimatedText text="Share Knowledge!" className='mb-16 lg: !text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
      <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
      <FeatureArticles 
      title='Course Nextjs'
      img={coursenextjs13} 
      summary='A complete course on NextJS version 13, from fundamental concepts, to its new features, such as the application directory structure, routing, React server components vs. client components, layouts, and more.' 
      link='https://youtu.be/MoUVqcvkLJo' 
      time='2 min' 
       />
      <FeatureArticles 
      img={architectsoftware} 
      summary='In this course, we&gt;ll explore the key concepts of software architecture, from fundamental design patterns to advanced modular design techniques. We will learn to think in a structured way and make informed decisions to create software systems that meet functional and non-functional requirements.' 
      link='/' 
      time='9 min read' 
      title='Architecture Software' />
      
    </ul>
    <h1 className=' text-center mt-16 text-3xl align-text-bottom font-extrabold text-dark'>All Courses</h1>
    <ul className='grid gap-16 mt-16'>
      <Article img={softwaredevelopment} title='Software Development' date='01/23' link='https://www.youtube.com/playlist?list=PLgoqc9F8WHgwQRYF89LDnwnbXMALfVCZY'/>
      <Article img={scrum} title='Agile Methodology/SCRUM' date='022/23' link='https://open.spotify.com/show/3gZL0R8tYZk6i8imEVt0L2?si=0ae9e744d53846de' />
      <Article img={iapost} title='AI -ONE CLICK AND ONE BIG JUMP' date='01/23' link='https://vidalalavarez.medium.com/ia-un-clic-y-un-gran-salto-3cee6a0d4757'  />
      <Article img={iapost} title='' date='01/23' link='https://vidalalavarez.medium.com/ia-un-clic-y-un-gran-salto-3cee6a0d4757'  />
    </ul>
      </div>
      
    </main>
    
    </>
  )
}

export default page;
