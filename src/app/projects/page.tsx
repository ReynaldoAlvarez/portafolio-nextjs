'use client';
import AnimatedText from '@/components/AnimatedText';
import Footer from '@/components/Footer'

import Hireme from '@/components/Hireme'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import project1Image from '../../../public/images/projects/crypto-screener-cover-image.jpg'
import bunkerbible from '../../../public/images/projects/bunkerbible.png'
import zmove from '../../../public/images/projects/zmove.png'
import geopois from '../../../public/images/projects/geopois.png'
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
type TFeatured ={
  type:string; 
  title:string; 
  summary:string; 
  img:any; 
  link:string; 
  github?:string;
  href?:string; 
}
const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, link, github, href, img}:TFeatured)=>{
  return(
    <article className="w-full flex items-center justify-between rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  text-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] 
      xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' 
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title}  className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition= {{duration:0.2}} 
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className= "text-primary font-medium text-xl dark:text-primaryDark ×s:text-base">{type}</span>
        <Link href={link} target='_blank'
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-dark text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          {github && <Link href={github} target='_blank' className='w-10 bg-dark'><GithubIcon/></Link>}
          
          <Link href={link} target='_blank'
          className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm-px-4 sm:text-base'
          > visit project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({type, title, link, github, img, summary}:TFeatured)=>{
  return(
    <article className='w-full flex  items-center justify-between rounded-3xl border border-solid
     border-dark  shadow-2xl p-12 relative rounded-br-2xl xs:p-4 '>
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2rem] rouded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
     
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden  rounded-lg'>
        <Image src={img} alt={title}  className="w-full h-auto"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
        <Link href={link} target='_blank'
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-dark dark:text-light text-2xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={link} target='_blank'
          className='rounded-lg text-primary text-lg font-semibold underline md:text-base'
          > visit</Link>
          {github && <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon/></Link>}
        </div>
        
      </div>
    </article>
  )
}

const page = () => {
  return (
    <>
    <Head>
    <title>Projects</title>
      <meta name='projects' content='any projects'></meta>

    </Head>
    <main className='w-full p-10 mb-16 flex-col items-center justify-center dark:text-light'>
      <div className=''>
        <AnimatedText text='Main Projects!' className="mb-16 lg: !text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
          <div className='col-span-12 '>
            <FeaturedProject 
            title='Qhaway - CRM'
            summary='THIS PROJECT IS A SUPER MALL IN WHICH SEVERAL STORES CAN REGISTER AND MANAGE THEIR SALES AND INVENTORIES, IT HAS THE CHARACTERISTIC OF COMMUNICATION WITH THE CLIENT DIRECTLY WITH THE STORE.
            Technologies: 
            web: Nextjs, React, redux toolkit, React Router, 
            Tailwind CSS, motion.
            Mobile: Dart, Flutter.
            API: NodeJs, Express, typescript, etc.'
            link='/'
            href='https://github.com/'
            type='Feature Project'
            img={project1Image}
            
            />
          </div>
          <div className='col-span-6 sm:col-span-12 '>
          <Project 
            title='BunkerBible'
            summary='BunkerBible is a digital Christian podcast and sermon service, which gives you access to podcasts and sermons from the Christian field. at the moment it is free
            can:
            have access to sermons, bible studies, podcast
            Each sermon is categorized by author and author&apos;s themes
            each bible study is categorized into 2 sections, AT, NT, both categorized in turn by authors of each book
            each audio book is categorized by topic and author of each topic
            Receive recommendations based on your tastes
            receive the top 3 most wanted
            the top 3 most searched authors'
            link='https://bunkerbible.netlify.app/estudios-biblicos'
            type='Project'
            img={bunkerbible}
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
              <Project 
            title='ZMove'
            summary='ZMove is an application that allows a driver to create a trip according to his needs, and based on this created trip, the passenger can search for the best available trips for his geographical area that best suits him.
            Technology:
            backend: NodeJs, Express, Typescript, MongoDb
            Front End (ios, android): Dart, Flutter
            cloud: AWS, Atlas,
            External APIs: Google APIs, OpenMaps, etc..'
            link='https://zmove.es/'
            type='Project'
            img={zmove}
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
              <Project 
            title='Geopois'
            summary='Geopois is a learning platform focused on geographic information technologies, as well as a space for interactive training and feedback on content uploaded by users through personalized tutorials. Specialists in geographic information systems, spatial databases and online web mapping viewers.
            Technology:
            backend: NodeJs, Typescript, PostgreSql
            Front End: Js, ReactJs, NextJs, Tailwindcss
            cloud: AWS, google cloud,'
            link='https://www.geopois.com/'
            type='Project'
            img={geopois}
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
              <Project 
            title='Geomarketing Hansa.com'
            summary='GeoMarketing, CRM based on geospatial technology, with the aim of monitoring customers based on fences, geofences, fluctuation points, etc.
            Technology:
            php, js, mysql, cc3
            cloud: google cloud'
            link='/'
            type='Project'
            img={project1Image}
            />
          </div>
          
        </div>
      </div>

    </main>
    </>
  )
}

export default page