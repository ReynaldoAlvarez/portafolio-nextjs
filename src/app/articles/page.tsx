'use client';
import AnimatedText from '@/components/AnimatedText';
import Footer from '@/components/Footer';
import Hireme from '@/components/Hireme';
import NavBar from '@/components/NavBar';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import articleImage1 from '../../../public/images/articles/pagination component in reactjs.jpg'
import articleImage2 from '../../../public/images/articles/create loading screen in react js.jpg'
import articleImage3 from '../../../public/images/articles/form validation in reactjs using custom react hook.png'
import articleImage4 from '../../../public/images/articles/smooth scrolling in reactjs.png'
import articleImage5 from '../../../public/images/articles/todo list app built using react redux and framer motion.png'

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
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline
        xs:text-lg
        '>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
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
    <NavBar />
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
      <div className='p-20'>
      <AnimatedText text="Words Can Change The World!" className='mb-16 lg: !text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
      <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
      <FeatureArticles img={articleImage1} 
      summary='Learn how to build a custom pagination component in ReactJS from scratch. 
      Follow this step-by-step guide to integrate Pagination component in your ReactJS project.' 
      link='/' 
      time='9 min read' 
      title='Build A Custom Pagination Component In Reactjs From Scratch' />
      <FeatureArticles img={articleImage2} 
      summary='Learn how to build a custom pagination component in ReactJS from scratch. 
      Follow this step-by-step guide to integrate Pagination component in your ReactJS project.' 
      link='/' 
      time='9 min read' 
      title='Build A Custom Pagination Component In Reactjs From Scratch' />
      <FeatureArticles img={articleImage1} 
      summary='Learn how to build a custom pagination component in ReactJS from scratch. 
      Follow this step-by-step guide to integrate Pagination component in your ReactJS project.' 
      link='/' 
      time='9 min read' 
      title='Build A Custom Pagination Component In Reactjs From Scratch' />
    </ul>
    <h1 className=' text-center mt-16 text-3xl align-text-bottom font-extrabold'>All Articles</h1>
    <ul className='grid gap-16 mt-16'>
      <Article img={articleImage3} title='text-center mt-16 text-3xl align-text-bottom' date='01/23' link='/'  />
      <Article img={articleImage4} title='text-center mt-16 text-3xl align-text-bottom' date='01/23' link='/'  />
      <Article img={articleImage5} title='text-center mt-16 text-3xl align-text-bottom' date='01/23' link='/'  />



    </ul>
      </div>
      
    </main>
 
    <Hireme />
    <Footer />
    
    </>
  )
}

export default page;
