import { useScroll, motion } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcons from './LiIcons';
type TDetail =
{position:string;
   company:string;
   companyLink:string;
   time:string;
   address:string;
   description:string;}

const Details = ({position, company, companyLink, time, address, description}:TDetail)=>{
   const ref:any = useRef();
  return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col it,ems-center justify-between md:w-[80%]'>
      <LiIcons reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;<a href={companyLink} target={'_blank'} className='capitalize text-primary'>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm '>
          {time} | {address}

        </span>
        <p className='font-medium w-full md:text-sm'>
          {description}
        </p>  
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress}= useScroll({
    target: ref,
    offset: ["start end","center start"]
  })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl mb:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-10 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-222'>
        <Details position="Developer Engineer" company='BunkerDev' companyLink='https://hansa.com.bo' time='0.5 year' address='EEUU' description='Backend AND FrontEnd web application and software developer,
designing, implementing, maintaining, and managing the BunkerDev StartUp and company&apos;s clients' />
        
          <Details position="Software Engineer" company='Geopois' companyLink='https://www.geopois.com' time='2.5 year' address='Madrid, Spain' description='Software Engineer in charge of carrying out the architecture of the application, developing web and mobile applications for the company&apos;s clients.' />
          

          <Details position="Geographic Information Sistem Engineer" company='Hansa' companyLink='https://hansa.com.bo' time='2.5 year' address='La Paz, Bo' description='Engineer In Charge Of The Development Until Its Deployment Of The Geographical Information System Of The Company - Div.Industria y Construccion.' />
          
          


        </ul>
      </div>
    </div>
  )
}

export default Experience